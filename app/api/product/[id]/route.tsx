import { products } from "@/app/data/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ error: "Id is required" }, { status: 400 });
    }

    const productId = parseInt(id, 10);

    const data = products.find((product) => product.id === productId);

    return NextResponse.json(data);
}
