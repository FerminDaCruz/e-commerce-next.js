"use client";

import { useAuthContext } from "@/app/context/AuthContext";

export default function LogoutButton() {
    const { logout } = useAuthContext();

    return (
        <button className="logout-button" onClick={logout}>
            Cerrar sesión
        </button>
    );
}
