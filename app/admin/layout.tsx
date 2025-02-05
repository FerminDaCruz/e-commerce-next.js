"use client";

import { useAuthContext } from "../context/AuthContext";
import { AdminLayoutProps } from "../types";
import LoginPage from "./login/page";

export default function AdminLayout({ children }: AdminLayoutProps) {
    const { user } = useAuthContext();

    if (user === undefined) {
        return <p>Cargando...</p>;
    }

    return <>{user?.logged ? children : <LoginPage />}</>;
}
