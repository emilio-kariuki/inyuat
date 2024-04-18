import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
    return new NextResponse("Hello world");
    }

export const POST = async (req: NextRequest) => {

    const data = await req.json();
    console.log(data);

    return new NextResponse("Hello world");

}