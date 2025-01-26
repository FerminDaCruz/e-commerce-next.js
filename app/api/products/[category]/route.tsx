import { NextRequest, NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(
    request: NextRequest,
    { params }: { params: { category: string } }
) {
    try {
        const { category } = params;
        //CONSOLE.LOG
        console.log("Category received:", category);

        if (!category) {
            return NextResponse.json(
                { error: "Category is required" },
                { status: 400 }
            );
        }

        const productosRef = collection(db, "productos");

        //CONSOLE.LOG
        console.log("Reference to productos collection created");

        const q =
            category === "todos"
                ? productosRef
                : query(productosRef, where("category", "==", category));

        //CONSOLE.LOG
        console.log("Query created:", q);

        const querySnapshot = await getDocs(q);

        //CONSOLE.LOG
        console.log("Query snapshot fetched:", querySnapshot);

        const docs = querySnapshot.docs.map((doc) => doc.data());

        //CONSOLE.LOG
        console.log("Mapped documents:", docs);

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
