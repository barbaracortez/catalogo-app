import "./Header.css"

function Header ({cartCount}) {
    return (
        <header className = "header">
            <h1 className ="title">Catálogo de Rpoductos</h1>
            <span className="cart-count">Carrito: {cartCount}</span>
        </header>
    );
}

export default Header;