// @ts-nocheck
import prisma from "../../../db/prisma"

export async function load({ url }) {

    const words = await prisma.definition.findMany({
        take: 5000
    })
    return { words }
}