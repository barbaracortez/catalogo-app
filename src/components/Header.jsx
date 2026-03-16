import { Link } from "react-router-dom";
import "./Header.css"

function Header ({cartCount}) {
    return (
        <header className = "header">
            <h1 className ="title">Catálogo de Productos</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">Carrito: {cartCount}</Link>
            </nav>
        </header>
    );
}

export default Header;