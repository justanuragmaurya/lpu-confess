import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';
import { cookies } from "next/headers";

const client = new PrismaClient();


export async function GET(req: NextRequest) {
    const _ = cookies()
    const data = await client.confessions.findMany();
    return new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
        }
    });
}

export const fetchCache = 'force-no-store';