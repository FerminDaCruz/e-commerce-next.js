"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, AuthProviderProps, User } from "../types";
import { auth, provider } from "@/firebase/config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
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

    const registerUser = async (values: {
        email: string;
        password: string;
    }) => {
        try {
            await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
        } catch (error) {
            console.log("Error registrando usuario:", error);
        }
    };

    const loginUser = async (values: { email: string; password: string }) => {
        try {
            await signInWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    const googleLogin = async () => {
        await signInWithPopup(auth, provider);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email ?? undefined,
                    uid: user.uid ?? undefined,
                });
            } else {
                setUser({
                    logged: false,
                    email: undefined,
                    uid: undefined,
                });
            }
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                registerUser,
                loginUser,
                logout,
                googleLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
