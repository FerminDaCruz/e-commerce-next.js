import ProductCard from "./ProductCard";
import { Product } from "../types";

export default async function ProductList({
    products,
}: {
    products: Product[];
}) {
    return (
        <section id="catalogo-grid">
            {products.map((product: Product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </section>
    );
}
