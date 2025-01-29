"use client";

import type React from "react";
import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <span>
                                {item.title} (x{item.quantity})
                            </span>
                            <div>
                                <span>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                                <button onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div>
                        <p>Total: ${total.toFixed(2)}</p>
                        <button onClick={clearCart}>Clear Cart</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
