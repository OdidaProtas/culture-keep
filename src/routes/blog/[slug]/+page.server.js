// @ts-nocheck

import { PrismaClient } from '@prisma/client'
import { error, redirect } from '@sveltejs/kit'
import { isAdmin } from '../../../db/authbodge';

import prisma from '../../../db/prisma';


export async function load({ url, params, locals }) {
    const pathname = String(url.pathname)
    const param = params.slug


    const session = await locals.getSession()


    let post = await prisma.blogContent.findFirst({
        where: { id: param },
        include: { comments: true }
    })


    if (!post.published && !isAdmin(session?.user?.email)) {
        throw error(403, "This post hasn't been published and is only visible to author")
    }


    let other = await prisma.blogContent.findMany({
        take: 10
    })

    other = [...other].filter(({ id }) => id !== param)

    if (!post) {
        throw redirect(302, '/blog')
    }

    return { post, more: other }
}


/** @type {import('./$types').Actions} */
export const actions = {
    actions: async ({ request }) => {
        const data = await request.formData();
        const id = String(data.get('id'));
        const isDelete = String(data.get('isDelete'));
        if ((isDelete) === "false") {
            let post = await prisma.blogContent.findFirst({
                where: { id }
            })

            if (post.published) {
                const entry = await prisma.blogContent.update({
                    where: { id },
                    data: { published: false }
                });
                return entry
            }
            else {
                const entry = await prisma.blogContent.update({
                    where: { id },
                    data: { published: true }
                });
                return entry
            }
        }
        else await prisma.blogContent.delete({
            where: { id }
        })

        throw redirect(302, "/blog")
    },
    async comment({ request, locals, params }) {
        const data = await request.formData();
        const blogContentId = params.slug
        const content = data.get("content")
        const session = await locals.getSession()
        if (!session) {
            throw error(403, "You must be signed in to add comments")
        }

        const comment = await prisma.comment.create({
            data: {
                content,
                blogContentId,
                authorName: session.user.name,
                authorEmail: session.user.email,
            }
        })
        return { ...comment, success: true }
    }
};