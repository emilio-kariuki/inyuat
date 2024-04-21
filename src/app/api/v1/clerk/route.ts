import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import axios from "axios";

export async function POST(request: Request) {
  const payload: WebhookEvent = await request.json();
  // user created
  if (payload.type === "user.created") {
    await prisma.user.create({
      data: {
        id: payload.data.id,
        email: payload.data.email_addresses[0].email_address,
        name: payload.data.first_name,
      },
    });
    const response = await axios.post(
      "https://dashboard.inyuat.site/api/v1/email",
      {
        to: payload.data.email_addresses[0].email_address,
        subject: "Welcome to Inyuat",
        text: "Welcome to Inyuat, we are glad to have you on board",
      },
    );
    console.log(response.data);
  } else if (payload.type === "user.updated") {
    await prisma.user.update({
      where: {
        id: payload.data.id,
      },
      data: {
        email: payload.data.email_addresses[0].email_address,
        name: payload.data.first_name,
      },
    });
  } else if (payload.type === "user.deleted") {
    await prisma.user.delete({
      where: {
        id: payload.data.id,
      },
    });
  }

  return new Response(JSON.stringify({ message: "success" }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function GET(request: Request) {
  return new Response("Hello World");
}
