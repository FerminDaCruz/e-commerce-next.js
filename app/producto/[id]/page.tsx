import { Product } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

type Params = {
    id: string;
};

export default async function ProductPage({ params }: { params: Params }) {
    const { id } = params;
    if (!id || isNaN(Number(id))) {
        return <div>Error: ID de producto inválido.</div>;
    }

    const response = await fetch(`http://localhost:3000/api/product/${id}`, {
        cache: "no-store",
    });

    const product: Product = await response.json();

    const srcImage =
        product?.image ||
        "https://imgs.search.brave.com/flC4FVRvK0Ggr59xDMk1-G7gnTi_Ok1xvXYMIizJ0As/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzI2/MzMvUE5HLzk2L29m/ZmljZV9nYWxsZXJ5/X2ltYWdlX3BpY3R1/cmVfaWNvbl8xNTkx/ODIucG5n";

    const altImage = product?.title || "imagen del producto";

    return (
        <div className="product-details">
            <h2>{product?.title}</h2>
            <div>
                <Image src={srcImage} alt={altImage} height={500} width={500} />
                <div>
                    <h4>{product?.title}</h4>
                    <p className="description">{product?.description}</p>
                    <ul>
                        {product?.features.map((feature, index) => (
                            <li key={index}> - {feature}</li>
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
