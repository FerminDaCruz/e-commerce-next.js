import { ReactNode } from "react";

export type Metadata = {
    title: string;
    description: string;
    keywords: Array<string>;
};

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
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    updateCartItemQuantity: (productId: string, quantity: number) => void;
}

export interface User {
    logged: boolean;
    email?: string;
    uid?: string;
}

export interface AuthContextType {
    user: User;
    registerUser: (values: {
        email: string;
        password: string;
    }) => Promise<User | void>;
    loginUser: (values: {
        email: string;
        password: string;
    }) => Promise<User | void>;
    logout: () => Promise<void>;
    googleLogin: () => Promise<void>;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface AdminLayoutProps {
    children: ReactNode;
}

export type ProductListProps = {
    category: string;
};
