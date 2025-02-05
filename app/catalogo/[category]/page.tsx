import ProductList from "@/app/components/ProductList";
import { baseUrl } from "@/app/constants/constants";
import { Product } from "@/app/types";
import Link from "next/link";

// Generar las rutas estáticas para las categorías
export function generateStaticParams() {
    return [
        { category: "todos" },
        { category: "equipamiento" },
        { category: "accesorios" },
    ];
}

// Este componente ahora hace el fetch directamente dentro de la función
export default async function Catalogo({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await params;

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
