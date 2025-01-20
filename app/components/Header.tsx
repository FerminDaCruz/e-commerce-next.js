import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header id="main-header">
            <div className="left">
                <Navbar />
                <h3 className="shop">tienda</h3>
            </div>
            <div className="center">
                <h1>Gym-commerce</h1>
            </div>
            <div className="right">
                <VscAccount className="icon account" />
                <FiShoppingCart className="icon" />
            </div>
        </header>
    );
}
