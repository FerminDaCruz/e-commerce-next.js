"use client";

import { createContext, useContext, useState } from "react";
import { AuthContextType, AuthProviderProps, User } from "../types";
import { auth } from "@/firebase/config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext debe usarse dentro de un AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User>({
        logged: false,
        email: undefined,
        uid: undefined,
    });

    const loginUser = async (values: { email: string; password: string }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );

            const user = userCredential.user;

            setUser({
                logged: true,
                email: user.email ?? undefined,
                uid: user.uid ?? undefined,
            });
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    const registerUser = async (values: {
        email: string;
        password: string;
    }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            const newUser = userCredential.user;

            setUser({
                logged: true,
                email: newUser.email ?? undefined,
                uid: newUser.uid ?? undefined,
            });
        } catch (error) {
            console.log("Error registrando usuario:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};
