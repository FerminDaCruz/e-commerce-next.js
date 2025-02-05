import ProductList from "@/app/components/ProductList";
import Link from "next/link";
import { Suspense } from "react";

export function generateStaticParams() {
    return [
        { category: "todos" },
        { category: "equipamiento" },
        { category: "accesorios" },
    ];
}

export const revalidate = 3600;

export default async function Catalogo(context: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await context.params;

    return (
        <div id="catalogo-page">
            <h2>Catálogo</h2>

            <h5>Categorias</h5>
            <ul className="categories">
                <li>
                    <Link href={"/catalogo/todos"}>todos</Link>
                </li>
                <li>
                    <Link href={"/catalogo/accesorios"}>accesorios</Link>
                </li>
                <li>
                    <Link href={"/catalogo/equipamiento"}>equipamiento</Link>
                </li>
            </ul>
            <Suspense fallback={<div>cargando...</div>}>
                <ProductList category={category} />
            </Suspense>
        </div>
    );
}
