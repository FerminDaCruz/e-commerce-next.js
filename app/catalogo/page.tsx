import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Catalogo() {
    return (
        <div id="catalogo-page">
            <h2>Catálogo</h2>
            <div id="catalogo-grid">
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}
