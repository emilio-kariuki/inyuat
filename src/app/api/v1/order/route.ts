import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { v1 as uuidv1 } from 'uuid';



export const GET = async(req: NextRequest) => {

    try{
      const pages = req.nextUrl.searchParams.get("page");
      const inventory = await prisma.inventory.findMany({
        take: 5,
        skip: Number(pages) > 1 ? (Number(pages) - 1) * 5 : 0,
        include: {
            orderItems: true
        },
        orderBy: {
            createdAt: 'asc'
        },
        
    })
        return new NextResponse(JSON.stringify(inventory), {
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
  "inventoryNumber": "INV-2fFCGzNRYICKaMrwP1mgYkGwKwJ",
  "total": 50000,
  "userId": "user_2fFCGzNRYICKaMrwP1mgYkGwKwJ",
  "supplierId": "SUPP_2fFCGzNRYICKaMrwP1mgYkGwKwJ",
  "quantity": 20,
  "product": [
    {
      "name": "Peas",
      "quantity": 10,
      "quality": "Good",
      "description": "Cartons of peas",
      "image": "https://www.picsa.pro/profile.jpg",
      
      "price": 10000
    },
    {
      "name": "Peas",
      "description": "Cartons of peas",
      "image": "https://www.picsa.pro/profile.jpg",
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
      const id = uuidv1()
        const data = await req.json()
        const inventory = await prisma.inventory.create({
            data: {
                id: id,
                inventoryNumber: "INV-" + id,
                total: data.total,
                supplierId: data.supplierId,
                userId: data.userId,
                quantity: data.quantity,
                product: {
                    create: data.products.map((item: any) => ({
                        name: item.name,
                        quantity: item.quantity,
                        quality: item.quality,
                        description: item.description
                    }))
                },  
          }
        })
        return new NextResponse(JSON.stringify({
            message: "Inventory added successfully",
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
              "content-type": "application/json",
            },
          })
    }
}

export const DELETE = async(req: NextRequest) => {
    const data = await req.json()
    const inventory = await prisma.inventory.delete({
        where: {
            id: data.id
        }
    })

    return new NextResponse(JSON.stringify({
        message: "Inventory deleted successfully",
    }), {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      })


}