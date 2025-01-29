import ProductCard from "./ProductCard";
import { Product } from "../types";

type ProductListProps = {
    category: string; // Asegúrate de que 'category' sea una cadena
};

export default async function ProductList({ category }: ProductListProps) {
    try {
        // CONSOLE.LOG
        console.log("Fetching products for category:", category);

        const response = await fetch(
            `http://localhost:3000/api/products/${category}`,
            {
                cache: "no-store",
            }
        );

        // CONSOLE.LOG
        console.log("Fetch response:", {
            status: response.status,
            statusText: response.statusText,
            ok: response.ok,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data: Product[] = await response.json();

        // CONSOLE.LOG
        console.log("Fetched products:", data);

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
