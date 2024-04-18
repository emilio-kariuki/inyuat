import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const GET = async(req: NextRequest) => {
    try{
        const orders = await prisma.order.findMany({
            include: {
                orderItems: true
            }
        })
        return new NextResponse(JSON.stringify(orders), {
            status: 200,
            headers: {
              "content-type": "application/json",
            },
          })
       
    }catch(e){
        console.error(e)
        return new NextResponse("Internal Server Error", {
            status: 500,
            headers: {
              "content-type": "text/plain",
            },
          })
    }
};

export const POST = async(req: NextRequest) => {
    // const user = await currentUser();

    // console.log(user)

    // if(!user){
    //     return new NextResponse("Unauthorized", {
    //         status: 401,
    //         headers: {
    //           "content-type": "text/plain",
    //         },
    //       })
    // }

    try{
        const data = await req.json()
        const order = await prisma.order.create({
            data: {
                id: data.id,
                orderNumber: data.orderNumber,
                total: data.total,
                address: data.address,
                customerName: data.customerName,
                customerEmail: data.customerEmail,
                customerPhone: data.customerPhone,
                userId: data.userId,
                orderItems: {
                    create: data.orderItems.map((item: any) => ({
                        name: item.name,
                        description: item.description,
                        quantity: item.quantity,
                        price: item.price,
                        image: item.image
                    }))
                },
                
                
            }
        })
        return new NextResponse(JSON.stringify({
            message: "Order created successfully",
        }), {
            status: 201,
            headers: {
              "content-type": "application/json",
            },
          })
    }catch(e: any){
        console.error(e)
        return new NextResponse(e, {
            status: 500,
            headers: {
              "content-type": "text/plain",
            },
          })
    }
}