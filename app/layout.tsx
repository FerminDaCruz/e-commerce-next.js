import { ReactNode } from "react";
import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/globals.scss";

type Metadata = {
    title: string;
    description: string;
    keywords: Array<string>;
};

export const metadata: Metadata = {
    title: "E-commerce",
    description: "e-commerce para el trabajo final de Next.JS en coderhouse",
    keywords: ["Coderhouse", "e-commerce", "proyecto"],
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;500&family=Lora:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <title>Mi Proyecto Next.js</title>
            </Head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
