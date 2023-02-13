// @ts-nocheck
import prisma from "../../../db/prisma";

export async function load({ url }) {
    const device = url.searchParams.get("ref")
    const orders = await prisma.order.findMany({
        where: {
            device,

        },
        include: {
            items: true,
            payment: true
        }
    })

    return { orders: orders.filter(order => order.payment) }
}

