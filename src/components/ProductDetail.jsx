import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail( {cart, setCart}){
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if(!product) return <p>Producto no encontrado</p>

    const addToCart = () => {
        setCart([...cart, product])
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description || "Sin descripción disponible"}</p>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    );
}

export default ProductDetail