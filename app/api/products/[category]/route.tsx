import { NextRequest, NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ category: string }> }
) {
    try {
        const { category } = await context.params;

        if (!category) {
            return NextResponse.json(
                { error: "Category is required" },
                { status: 400 }
            );
        }

        const productosRef = collection(db, "productos");

        const q =
            category === "todos"
                ? query(productosRef)
                : query(productosRef, where("category", "==", category));

        const querySnapshot = await getDocs(q);

        const docs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        if (docs.length === 0) {
            return NextResponse.json(
                { message: "No products found in this category", products: [] },
                { status: 404 }
            );
        }

        return NextResponse.json(docs);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}
