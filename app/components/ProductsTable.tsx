import Image from "next/image";
import { Product } from "../types";
import Link from "next/link";

export default async function ProductsTable() {
    console.log("Rendering ProductsTable...");
    let items: Product[] = [];

    try {
        const res = await fetch("http://localhost:3000/api/products/todos", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`API error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        // Asegurarse de que la respuesta es un array
        if (!Array.isArray(data)) {
            throw new Error("API response is not an array");
        }

        items = data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return <p className="error-message">Error loading products</p>;
    }

    return (
        <div className="products-table-container">
            <table className="products-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Categoría</th>
                        <th>Descripción</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? (
                        items.map((item) => (
                            <tr key={item.id} className="product-row">
                                <td className="product-title">{item.title}</td>
                                <td className="product-price">${item.price}</td>
                                <td className="product-stock">{item.stock}</td>
                                <td className="product-category">
                                    {item.category}
                                </td>
                                <td className="product-description">
                                    {item.description}
                                </td>
                                <td className="product-image">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                    />
                                </td>
                                <td className="product-actions">
                                    <Link
                                        className="edit-link"
                                        href={`/admin/edit/${item.id}`}
                                    >
                                        Editar
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No products found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
