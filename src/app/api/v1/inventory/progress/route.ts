import { NextResponse, NextRequest } from "next/server";
 import prisma from "@/lib/db";
//* update order status
/*
id: string;
status
*/
export const PUT = async (req: NextRequest) => {
    const data = await req.json()
    const order = await prisma.inventory.update({
        where: {
            id: data.id
        },
        data: {
            quantity: data.status
        }
    })
    return new NextResponse(JSON.stringify({
        message: "Order updated successfully",
    }), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      })
    }

