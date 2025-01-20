import Link from "next/link";
import { Product } from "../catalogo/page";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <div>
                <p>${product.price}</p>
                <Link
                    href={`/producto/${product.id}`}
                    className="boton-comprar"
                >
                    Comprar
                </Link>
            </div>
        </div>
    );
}
