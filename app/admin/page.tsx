import Link from "next/link";
import ProductsTable from "../components/ProductsTable";

export default function Admin() {
    return (
        <div className="admin-page">
            <h2>Panel de administracion</h2>
            <Link href={"/admin/create"} className="create-product">
                Crear producto
            </Link>

            <ProductsTable />
        </div>
    );
}
