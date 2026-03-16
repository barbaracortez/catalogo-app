import Cart from "./Cart"

function CartPage({ cart, setCart }) {
  const removeFromCart = (index) =>
    setCart(cart.filter((_, i) => i !== index));
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return <Cart cart={cart} onRemove={removeFromCart} total={total} />;
}

export default CartPage;