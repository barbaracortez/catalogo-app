import { useState } from "react";
import products from "./data/products";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filtereProducts = products.filter((products)=>
  products.name.toLowerCase().includes(searchTerm.toLowerCase())
);
const handleRemoveFromCart = (indexToRemove) => {
  const updatedCart = cart.filter((_, index) => index !== indexToRemove);
  setCart(updatedCart);
};


  return (
    <div className="app">
      <Header cartCount={cart.length} />
      <div className="top-bar">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      <div className = "main-content">
        <div className="product-grid">
        {filtereProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
        </div>

      <Cart cart={cart}  onRemove={handleRemoveFromCart}/>
      </div>
    </div>
  );
}

export default App;
