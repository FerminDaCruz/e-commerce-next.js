"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Product } from "../types";

interface QuantitySelectorProps {
    product: Product;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1);
    };

    return (
        <div className="qty-selector">
            <div className="quantity-controls">
                <button
                    className="button decrement"
                    onClick={handleDecrease}
                    aria-label="Decrease quantity"
                >
                    -
                </button>
                <p>{quantity}</p>
                <button
                    className="button increment"
                    onClick={handleIncrease}
                    aria-label="Increase quantity"
                >
                    +
                </button>
                <button
                    className="button add-to-cart"
                    onClick={handleAddToCart}
                    aria-label="Add to cart"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default QuantitySelector;
