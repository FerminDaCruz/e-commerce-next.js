"use client";

import { useState } from "react";
import { useAuthContext } from "@/app/context/AuthContext";

export default function LoginForm() {
    const { registerUser, loginUser, googleLogin } = useAuthContext();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Login</h2>
                <input
                    className="login-input"
                    type="email"
                    value={values.email}
                    required
                    placeholder="Tu email"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    className="login-input"
                    type="password"
                    value={values.password}
                    required
                    placeholder="Tu contraseña"
                    name="password"
                    onChange={handleChange}
                />
                <button
                    className="login-button"
                    onClick={() => loginUser(values)}
                >
                    Ingresar
                </button>
                <button className="login-button" onClick={googleLogin}>
                    Ingresar con Google
                </button>
                <button
                    className="login-button"
                    onClick={() => registerUser(values)}
                >
                    Registrarme
                </button>
            </form>
        </div>
    );
}
