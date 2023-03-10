// @ts-nocheck
import { convertToSlug } from '$lib/str/slug';
import { redirect } from '@sveltejs/kit';
import prisma from '../../../db/prisma';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const title = String(data.get('title'));
        const coverImage = String(data.get('coverImage'));
        const content = String(data.get('content'));
        
        const slug = convertToSlug(title)

        const entry = await prisma.blogContent.create({
            data: { title, coverImage, content, slug }
        });

        if (entry)
            throw redirect(302, `/blog/${entry.id}`)

    }
};
