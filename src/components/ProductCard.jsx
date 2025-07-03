import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <button onClick={() => onAddToCart(product)} className="add-button">
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
