// @ts-nocheck

import prisma from '../../../../db/prisma';

export async function load({ url }) {
    const pathname = String(url.pathname)
    const param = pathname.split("/blog/")[1].split("/edit")[0]

    let post = await prisma.blogContent.findFirst({
        where: { id: param }
    })
    return { post }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const title = String(data.get('title'));
        const coverImage = String(data.get('coverImage'));
        const content = String(data.get('content'));

        const slug = title.split(" ").join("_").trim().toLowerCase()

        const pathname = String(url.pathname)
        const param = pathname.split("/blog/")[1].split("/edit")[0]

        const entry = await prisma.blogContent.update({
            data: { title, coverImage, content, slug },
            where: { id: param }
        });

        return entry

    }
};