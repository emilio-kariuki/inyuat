import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest) => {
  const data = await req.json();
  const email = await resend.emails.send({
    to: data.to,
    from: "info@inyuat.site",
    subject: data.subject,
    text: data.text,
  });
  return new NextResponse(JSON.stringify(email), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};
