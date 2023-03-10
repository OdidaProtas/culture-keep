// @ts-nocheck
import prisma from "../../../db/prisma";

export async function load({ url }) {
    const status = url.searchParams.get("status")
    console.log(status)
    if (!status) {
        const orders = await prisma.order.findMany({
            include: {
                payment: true
            }
        })
        return { orders }
    } else {
        const orders = await prisma.order.findMany({
            where: { status: String(status) },
            include: {
                payment: true
            }
        })
        return { orders }
    }
}

export const actions = {
    async default() {
        console.log(
            "lkjbh"
        )
        return { success: true }
    }
}