import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header cartCount={cart.length} />

      <Routes>
          <Route path="/home" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="/"
          element={<Home cart={cart} setCart={setCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail cart={cart} setCart={setCart} />}
        />
        <Route 
          path="/cart" 
          element={<CartPage cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
}

export default App;