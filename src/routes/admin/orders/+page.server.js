// @ts-nocheck
import prisma from "../../../db/prisma";

export async function load({ }) {
    const orders = await prisma.order.findMany({
        include: {
            payment: true
        }
    })
    return { orders }
}