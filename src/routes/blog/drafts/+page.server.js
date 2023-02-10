// @ts-nocheck
import prisma from "../../../db/prisma"

export async function load() {
    const drafts = await prisma.blogContent.findMany({
        where: {
            published: false
        }
    })

    return { drafts }
}