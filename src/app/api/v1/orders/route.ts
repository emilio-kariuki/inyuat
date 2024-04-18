import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const GET = async(req: NextRequest) => {
    try{
        const orders = await prisma.order.findMany({
            include: {
                orderItems: true
            },
            orderBy: {
                createdAt: 'asc'
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

/*
// sample request body
{
  "id": "ab",
  "orderNumber": "ORD-004",
  "status": "PENDING",
  "total": 50000,
  "userId": "user_2fFCGzNRYICKaMrwP1mgYkGwKwJ",
  "address": "Nairobi, Kenya",
  "customerName": "Amanda Flavia",
  "customerPhone": "+254796250443",
  "customerEmail": "amanda@inyuat.site",
  "orderItems": [
    {
      "id": "1234",
      "name": "Peas",
      "description": "Cartons of peas",
      "image": "www.picsa.pro/profile.jpg",
      "orderId": "ab",
      "quantity": 10,
      "price": 10000
    },
    {
      "id": "12345",
      "name": "Peas",
      "description": "Cartons of peas",
      "image": "www.picsa.pro/profile.jpg",
      "orderId": "ab",
      "quantity": 10,
      "price": 10000
    }
  ]

}
*/

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
