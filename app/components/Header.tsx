import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
    return (
        <header id="main-header">
            <div className="left">
                <Navbar />
                <h3 className="shop">
                    <Link href={"/catalogo/todos"}>tienda</Link>
                </h3>
            </div>
            <div className="center">
                <Link href={"/"}>
                    <h1>Gym-commerce</h1>
                </Link>
            </div>
            <div className="right">
                <Link href={"/admin"}>
                    <VscAccount className="icon account" />
                </Link>

                <Link href={"/cart"}>
                    <FiShoppingCart className="icon" />
                </Link>
            </div>
        </header>
    );
}
