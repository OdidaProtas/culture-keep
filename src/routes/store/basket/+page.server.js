// @ts-nocheck
import prisma from '../../../db/prisma';

// @ts-ignore
export const load = async ({ url }) => {

    let device = (url.searchParams.get("basket-id"))

    const order = await prisma.order.findFirst({
        where: { device },
        include: {
            items: true
        }
    });
    return { order };
};


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();
        let basketId = url.searchParams.get("basket-id")

        const id = String(data.get("id"))

        await prisma.orderItem.delete({
            where: { id }
        })


    }
};
