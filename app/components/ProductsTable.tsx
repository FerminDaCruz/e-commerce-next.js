import Image from "next/image";
import { Product } from "../types";
import Link from "next/link";

export default async function ProductsTable() {
    try {
        const items = await fetch("http://localhost:3000/api/products/todos", {
            cache: "no-store",
        }).then((r) => r.json());

        return (
            <div>
                <table className="products-table">
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Categoria</th>
                            <th>Descripción</th>
                            <th>Imagen</th>
                            <th>Acciomes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item: Product) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td>{item.category}</td>
                                <td>{item.description}</td>
                                <td>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                    />
                                </td>
                                <td>
                                    <Link
                                        className="link"
                                        href={`/admin/edit/${item.id}`}
                                    >
                                        Editar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } catch {
        return <p>Error loading products</p>;
    }
}
