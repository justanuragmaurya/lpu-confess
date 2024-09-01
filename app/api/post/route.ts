import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();

    await client.confessions.create({
        data: {
            title: body.title,
            content: body.content
        }
    });
    
    console.log(body);

    return new Response(JSON.stringify({
        message: "Successfully received data!"
    }), {
        headers: { 'Content-Type': 'application/json' }
    });
}