// @ts-nocheck
import prisma from '../../../../db/prisma';



/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const words = await prisma.definitions.findMany({
        where: {
            deleted: false,
            flagged: false
        }
    })
    return new Response(String(words));
}