import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export const GET = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const products = await prisma.inventory.findFirst({
      where: {
        id: id!,
      },
      include: {
        product: true,
        user: true,
      },
    });
    return new NextResponse(JSON.stringify(products), {
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
