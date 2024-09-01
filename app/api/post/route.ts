import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();

    // Artificial delay function
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    await client.confessions.create({
        data: {
            title: body.title,
            content: body.content
        }
    });

    // Introduce a 1-second delay
    await delay(3000);

    console.log(body);

    return new Response(JSON.stringify({
        message: "Successfully received data!"
    }), {
        headers: { 'Content-Type': 'application/json' }
    });
}