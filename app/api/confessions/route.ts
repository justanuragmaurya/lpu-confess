import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function GET(req: NextRequest) {
    const data = await client.confessions.findMany()
    return new Response(JSON.stringify(data));
}
