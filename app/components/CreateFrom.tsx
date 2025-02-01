"use client";

import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Product } from "../types";

const createProduct = async (values: Product) => {
    const docRef = doc(db, "productos", values.id);
    return setDoc(docRef, { ...values }).then(() =>
        console.log("producto agregado!")
    );
};

export default function CreateForm() {
    const [values, setValues] = useState({
        title: "",
        description: "",
        stock: 0,
        price: 0,
        category: "",
        id: "",
        image: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createProduct(values);
        setValues({
            title: "",
            description: "",
            stock: 0,
            price: 0,
            category: "",
            id: "",
            image: "",
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <label className="form-label">Id:</label>
                <input
                    className="form-input"
                    type="text"
                    value={values.id}
                    required
                    name="id"
                    onChange={handleChange}
                />

                <label className="form-label">Title:</label>
                <input
                    className="form-input"
                    type="text"
                    value={values.title}
                    required
                    name="title"
                    onChange={handleChange}
                />

                <label className="form-label">Stock:</label>
                <input
                    className="form-input"
                    type="number"
                    value={values.stock}
                    required
                    name="stock"
                    onChange={handleChange}
                />

                <label className="form-label">Price:</label>
                <input
                    className="form-input"
                    type="number"
                    value={values.price}
                    required
                    name="price"
                    onChange={handleChange}
                />

                <label className="form-label">Category:</label>
                <input
                    className="form-input"
                    type="text"
                    value={values.category}
                    required
                    name="category"
                    onChange={handleChange}
                />

                <label className="form-label">Image:</label>
                <input
                    className="form-input"
                    type="text"
                    value={values.image}
                    required
                    name="image"
                    onChange={handleChange}
                />

                <label className="form-label">Description:</label>
                <textarea
                    name="description"
                    value={values.description}
                    required
                    onChange={handleChange}
                    rows={3}
                    className="form-textarea"
                />

                <button className="form-button" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
}
