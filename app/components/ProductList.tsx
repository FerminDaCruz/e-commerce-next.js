import ProductCard from "./ProductCard";
import { Product } from "../types";

type ProductListProps = {
    category: string; // Asegúrate de que 'category' sea una cadena
};

export default async function ProductList({ category }: ProductListProps) {
    try {
        const response = await fetch(
            `http://localhost:3000/api/products/${category}`,
            {
                cache: "no-store",
            }
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data: Product[] = await response.json();

        return (
            <section id="catalogo-grid">
                {data.map((product: Product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </section>
        );
    } catch (error) {
        console.error("error fetching product list:", error);
        return <p>Error loading products</p>;
    }
}
