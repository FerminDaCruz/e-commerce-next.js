import QtySelector from "@/app/components/QtySelector";
import { Product } from "@/app/types";
import Image from "next/image";

export default async function ProductPage(context: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await context.params;
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
            <section className="main-section">
                <Image
                    className="image"
                    src={srcImage}
                    alt={altImage}
                    height={500}
                    width={500}
                />
                <div className="data">
                    <h2 className="title">{product?.title}</h2>
                    <hr />
                    <p className="price">${product?.price}</p>

                    <QtySelector product={product} />
                    <p className="stock">stock: {product.stock}</p>
                </div>
            </section>

            <section className="description-section">
                <h5>descripción:</h5>
                <hr />
                <p>{product.description}</p>
            </section>
        </div>
    );
}
