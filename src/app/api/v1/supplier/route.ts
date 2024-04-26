import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const suppliers = await prisma.supplier.findMany({
      include: {
        inventory: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return new NextResponse(JSON.stringify(suppliers), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error: any) {
    console.error(error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
      headers: {
        "content-type": "text/plain",
      },
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    await prisma.supplier.create({
      data: {
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    });
    return new NextResponse(
      JSON.stringify({
        message: "Supplier added successfully",
      }),
      {
        status: 201,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  } catch (error: any) {
    console.error(error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
};
