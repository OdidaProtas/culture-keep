// @ts-nocheck
import prisma from "../../../db/prisma";

export async function load({ url, cookies }) {
    const device = cookies.get("device-id")
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

