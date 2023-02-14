// @ts-nocheck
import prisma from "../../../../db/prisma";

export async function load({ }) {
    const words = await prisma.definition.findMany({
        where: { deleted: true }
    })

    return { words }
}