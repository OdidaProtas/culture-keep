// @ts-nocheck
import prisma from '../../../db/prisma';

// @ts-ignore
export const load = async ({ url, cookies }) => {

    let device = (cookies.get("device-id"))

    const order = await prisma.order.findFirst({
        where: { device, status: "draft", payment: null },
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
        let basketId = cookies.get("device-id")

        const id = String(data.get("id"))

        await prisma.orderItem.delete({
            where: { id }
        })


    }
};
