// @ts-nocheck
import prisma from "../../../db/prisma"

export async function load() {
    const posts = await prisma.blogContent.findMany({
    })

    return { posts }
}