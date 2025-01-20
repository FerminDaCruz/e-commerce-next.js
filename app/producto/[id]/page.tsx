import { products } from "@/app/data/products";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

export default function Product({ params }) {
    const { id } = params;

    const product = products.find((product) => product.id === parseInt(id));
    console.log(product);

    return (
        <div className="product-details">
            <h2>{product?.title}</h2>
            <div>
                <img src={product?.image} alt={product?.title} />
                <div>
                    <h4>{product?.title}</h4>
                    <p className="description">{product?.description}</p>
                    <ul>
                        {product?.features.map((feature) => (
                            <li> - {feature}</li>
                        ))}
                    </ul>
                    <p className="rating">
                        Rating:{" "}
                        <span>
                            <CiStar />
                            {product?.rating}
                        </span>
                    </p>
                    <p className="category">
                        Category: <span>{product?.category}</span>
                    </p>
                    <p className="stock">
                        Stock: <span>{product?.stock}</span>
                    </p>

                    <div>
                        <p className="price">${product?.price}</p>
                        <Link href={"/"} className="boton-comprar">
                            Comprar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    rating: number;
    reviews: number;
    features: string[];
}
