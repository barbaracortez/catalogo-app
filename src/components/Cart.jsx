import "./Cart.css";

function Cart({ cart, onRemove, total }) {
  return (
    <div className="cart">
      <h2 className="cart-title">Carrito</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <span>
                  {item.name} - ${item.price}
                </span>
                <button className="remove-btn" onClick={() => onRemove(index)}>
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total:</strong> ${total}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
