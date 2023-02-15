// @ts-nocheck
import { redirect } from '@sveltejs/kit'
import prisma from '../../db/prisma'

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ locals, }) => {

        const session = await locals.getSession()


        const user = session?.user


        if (user) {
            const student = await prisma.student.create({
                data: {
                    email: user.email
                }
            })
            return { success: true, ...student }
        }
        throw redirect(302, "/auth/signin")

    }
}

export async function load({ locals }) {
    const session = await locals.getSession()
    const user = session?.user

    const student = await prisma.student.findFirst({
        where: {
            email: user?.email
        }
    })

    return { student }
}