// @ts-nocheck
import prisma from "../../db/prisma";

export async function GET() {
    let words = await prisma.definition.findMany({ take: 5 })
    words = words.map(word => word.word)
    return new Response((words))
}