import "./ProductCard.css";
import { Link } from "react-router-dom"

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      </Link>
      <p className="product-price">${product.price}</p>
      <button onClick={() => onAddToCart(product)} className="add-button">
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
