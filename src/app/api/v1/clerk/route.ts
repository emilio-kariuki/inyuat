import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/db";


export async function POST(request: Request){
    const payload: WebhookEvent = await request.json();
    // user created
    if(payload.type === "user.created"){
        await prisma.user.create({
            data: {
                id: payload.data.id,
                email: payload.data.email_addresses[0].email_address,
                name: payload.data.first_name,
            }
        })
    }
}

export async function GET(request: Request){
    return new Response("Hello World")
}