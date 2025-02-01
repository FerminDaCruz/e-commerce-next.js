"use client";

import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="shopping-cart">
            <h2 className="cart-title">Carrito</h2>
            {cart.length === 0 ? (
                <p className="empty-cart">Tu carrito está vacio</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <span className="item-info">
                                    {item.title} (x{item.quantity})
                                </span>
                                <div className="item-actions">
                                    <span className="item-price">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </span>
                                    <button
                                        className="remove-button"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <p className="total-price">
                            Total: ${total.toFixed(2)}
                        </p>
                        <div className="cart-buttons">
                            <button className="clear-cart" onClick={clearCart}>
                                Vaciar carrito
                            </button>
                            <button className="buy-cart">Comprar</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
