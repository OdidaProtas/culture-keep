// @ts-nocheck 

import { error } from "@sveltejs/kit"
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

    if (!order){
        throw error(404, "Could not find this order")
    }

    return { order }
}