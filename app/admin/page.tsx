import Link from "next/link";
import ProductsTable from "../components/ProductsTable";
import LogoutButton from "../components/auth/LogoutButton";

export default function Admin() {
    return (
        <div className="admin-page">
            <h2>Panel de administracion</h2>
            <div className="buttons">
                <Link href={"/admin/create"} className="create-product">
                    Crear producto
                </Link>
                <LogoutButton />
            </div>

            <ProductsTable />
        </div>
    );
}
