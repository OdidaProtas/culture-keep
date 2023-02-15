// @ts-nocheck 

import { error } from "@sveltejs/kit"
import prisma from "../../../../db/prisma"

export async function load({ params }) {
    const id = params.id

    const student = await prisma.student.findFirst({
        where: { id },
    })

    const user = await prisma.user.findMany()


    if (!student) {
        throw error(404, "Could not find this order item")
    }

    return { student }
}