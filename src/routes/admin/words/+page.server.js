// @ts-nocheck
import prisma from "../../../db/prisma"

export async function load({ url }) {

    const words = await prisma.definition.findMany({
        where: {
            flagged: true
        }
    })
    return { words }
}