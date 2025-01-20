"use client";

import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";

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
                    <li className="item">Inicio</li>
                    <li className="item">Catálogo</li>
                    <li className="item">Carrito</li>
                    <li className="item">Sobre nosotros</li>
                    <li className="item">Cuenta</li>
                </ul>
            </div>
        </nav>
    );
}
