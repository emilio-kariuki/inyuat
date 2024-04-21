import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/db";

export const GET = async (req: NextRequest) => {
  const users = await prisma.user.findMany();
  return new NextResponse(JSON.stringify(users), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

export const DELETE = async (req: NextRequest) => {
  const data = await req.json();
  const user = await prisma.user.delete({
    where: {
      id: data.id,
    },
  });
  return new NextResponse(
    JSON.stringify({
      message: "User deleted successfully",
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    },
  );
};
