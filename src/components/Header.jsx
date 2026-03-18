import { Link } from "react-router-dom";
import "./Header.css";

function Header({ cartCount }) {
  return (
    <header className="header">
      <h1 className="title">Catálogo de Productos</h1>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link">
          Carrito: <span className="cart-count">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;