import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export async function load() {

    const posts = await prisma.blogContent.findMany({ take: 50, where: { published: true } })

    return { posts }
}