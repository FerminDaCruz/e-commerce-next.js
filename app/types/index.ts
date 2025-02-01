export interface Product {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number;
    category: string;
    stock: number;
}
export interface CartItem extends Product {
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    updateCartItemQuantity: (productId: number, quantity: number) => void;
}
