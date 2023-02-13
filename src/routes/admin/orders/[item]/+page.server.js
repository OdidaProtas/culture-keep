// @ts-nocheck 

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

    return { order }
}