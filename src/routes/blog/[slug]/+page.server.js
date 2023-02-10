// @ts-nocheck

import prisma from '../../../db/prisma';

export async function load({ url }) {
    const pathname = String(url.pathname)
    const param = pathname.split("/blog/")[1]

    let post = await prisma.blogContent.findFirst({
        where: { id: param }
    })
    return { post }
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const id = String(data.get('id'));
        const isDelete = String(data.get('isDelete'));

        if (!Boolean(isDelete)) {
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