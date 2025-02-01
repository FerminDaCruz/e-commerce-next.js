"use client";

import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav id="main-navbar">
            <LuMenu className="icon menu" onClick={toggleMenu} />
            <div className={`navbar ${menuActive ? "active" : ""}`}>
                <IoCloseCircleOutline
                    onClick={toggleMenu}
                    className="close-icon"
                />
                <ul className="navbar-list">
                    <li className="item">
                        <Link href={"/"}>Inicio</Link>
                    </li>
                    <li className="item">
                        <Link href={"/catalogo"}>Catálogo</Link>
                    </li>
                    <li className="item">
                        <Link href={"/cart"}>Carrito</Link>
                    </li>
                    <li className="item">
                        <Link href={"/admin"}>Admin</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
