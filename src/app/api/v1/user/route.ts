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
    }

