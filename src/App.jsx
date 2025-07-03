import { useState } from "react";
import products from "./data/products";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <Header cartCount={cart.length} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
