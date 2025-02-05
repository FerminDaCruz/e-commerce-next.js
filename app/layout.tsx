import { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/globals.scss";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { Metadata } from "./types";

export const metadata: Metadata = {
    title: "E-commerce",
    description: "e-commerce para el trabajo final de Next.JS en coderhouse",
    keywords: ["Coderhouse", "e-commerce", "proyecto"],
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
            <body>
                <AuthProvider>
                    <CartProvider>
                        <Header />
                        {children}
                        <Footer />
                    </CartProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
