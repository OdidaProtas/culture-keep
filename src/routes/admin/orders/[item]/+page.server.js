// @ts-nocheck 

import { error } from "@sveltejs/kit"
import { isAdmin } from "../../../../db/authbodge"
import prisma from "../../../../db/prisma"

export async function load({ params }) {
    const id = params.item

    const order = await prisma.order.findFirst({
        where: { id },
        include: {
            items: true,
            payment: true
        }
    })

    if (!order) {
        throw error(404, "Could not find this order")
    }

    return { order }
}


export const actions = {
    async default({ request, locals, params }) {
        const session = await locals.getSession()
        if (!isAdmin(session?.user?.email)) {
            throw error(404, "You need administrator priviledges to access this page")
        }
        const id = params.item
        const data = await request.formData()
        const status = String(data.get("status"))
        await prisma.order.update({
            where: { id },
            data: { status }
        })
        return { success: true }
    }
}