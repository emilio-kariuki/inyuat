import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export const PUT = async (req: NextRequest) => {
  const data = await req.json();
  const item = await prisma.product.update({
    where: {
      id: data.id,
    },
    ...data,
  });
  return new NextResponse(JSON.stringify(item));
};

export const GET = async (req: NextRequest) => {
  const items = await prisma.product.findMany();
  return new NextResponse(JSON.stringify(items));
};
