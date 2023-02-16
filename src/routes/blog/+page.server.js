// @ts-nocheck

import { error } from "@sveltejs/kit"
import prisma from "../../db/prisma"

export async function load() {

    const posts = await prisma.blogContent.findMany({ take: 100, where: { published: true } })

    let featured = [...posts].slice(0, 4)
    let morePosts = [...posts].slice(4, 12)
    let restOfPosts = [...posts].slice(13, 100)


    return { posts: featured, more: morePosts, rest: restOfPosts }
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData()
        const email = data.get("email")
        try {
            const sub = await prisma.subscription.create({
                data: { email }
            })
            return { ...sub, success: true }
        } catch (e) {
            throw error(403, "Request failed. You have already subscribed.")
        }
    }
}