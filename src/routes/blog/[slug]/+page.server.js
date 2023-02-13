// @ts-nocheck

import { PrismaClient } from '@prisma/client'

// import prisma from '../../../db/prisma';

const prisma = new PrismaClient()

export async function load({ url, params }) {
    const pathname = String(url.pathname)
    const param = params.slug


    let post = await prisma.blogContent.findFirst({
        where: { id: param }
    })

    let other = await prisma.blogContent.findMany({
        take: 10
    })

    return { post, more: other }
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
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
    }
};