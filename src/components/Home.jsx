import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";

function Home({ cart, setCart}) {
  ;
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) =>
    setCart(cart.filter((_, i) => i !== index));
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <div className="product-grid">
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={() => addToCart(p)}
          />
        ))}
      </div>
      <Cart cart={cart} onRemove={removeFromCart} total={total} />
    </div>
  );
}

export default Home;