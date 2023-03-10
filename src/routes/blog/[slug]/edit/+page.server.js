// @ts-nocheck

import { convertToSlug } from '$lib/str/slug';
import { redirect } from '@sveltejs/kit';
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

        const slug = convertToSlug(title)

        const pathname = String(url.pathname)
        const param = pathname.split("/blog/")[1].split("/edit")[0]

        const entry = await prisma.blogContent.update({
            data: { title, coverImage, content, slug },
            where: { id: param }
        });

        if (entry)
            throw redirect(302, `/blog/${entry.id}`)

    }
};