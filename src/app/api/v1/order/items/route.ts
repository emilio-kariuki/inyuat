import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export const PUT = async(req: NextRequest) =>{
    const data = await req.json();
    const item = await prisma.orderItems.update({
        where: {
            id:data.id,
            orderId: data.orderId
        },
        data: {
            image: data.image,
        }
    });
    return new NextResponse(JSON.stringify(item));
}