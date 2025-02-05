import { NextRequest, NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        if (!id) {
            return NextResponse.json(
                { error: "Missing id parameter" },
                { status: 400 }
            );
        }

        const productsRef = collection(db, "productos");
        const productQuery = query(productsRef, where("id", "==", id));
        const querySnapshot = await getDocs(productQuery);

        if (!querySnapshot.empty) {
            const product = querySnapshot.docs[0].data();
            return NextResponse.json(product);
        } else {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }
    } catch (error) {
        console.error("Error fetching product:", error);
        return NextResponse.json(
            { error: "Failed to fetch product" },
            { status: 500 }
        );
    }
}
