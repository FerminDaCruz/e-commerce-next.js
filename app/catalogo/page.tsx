import ProductList from "@/app/components/ProductList";
import Link from "next/link";
import { Product } from "../types";
import { baseUrl } from "../constants/constants";

export default async function Catalogo() {
    const category = "todos";

    try {
        const response = await fetch(`${baseUrl}/api/products/${category}`, {
            cache: "default",
            next: {
                revalidate: 3600,
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const products: Product[] = await response.json();

        return (
            <div id="catalogo-page">
                <h2>Catálogo</h2>
                <h5>Categorías</h5>
                <ul className="categories">
                    <li>
                        <Link href={"/catalogo/todos"}>todos</Link>
                    </li>
                    <li>
                        <Link href={"/catalogo/accesorios"}>accesorios</Link>
                    </li>
                    <li>
                        <Link href={"/catalogo/equipamiento"}>
                            equipamiento
                        </Link>
                    </li>
                </ul>
                <ProductList products={products} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching product list:", error);
        return <div>Error loading products</div>;
    }
}
