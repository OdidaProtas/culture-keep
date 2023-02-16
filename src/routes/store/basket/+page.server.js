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
    remove: async ({ cookies, request, url }) => {
        const data = await request.formData();

        const id = String(data.get("id"))

        await prisma.orderItem.delete({
            where: { id }
        })


        return { removed: true }
    },
    async increase({ request }) {
        const data = await request.formData();

        const id = String(data.get("id"))

        const item = await prisma.orderItem.findFirst({
            where: { id }
        })


        await prisma.orderItem.update({
            where: {
                id
            },
            data: { quantity: item.quantity + 1 }
        })


    },
    async decrease({ request }) {
        const data = await request.formData();

        const id = String(data.get("id"))

        const item = await prisma.orderItem.findFirst({
            where: { id }
        })

        if (item.quantity > 1)
            await prisma.orderItem.update({
                where: {
                    id
                },
                data: { quantity: item.quantity - 1 }
            })
        else
            await prisma.orderItem.delete({
                where: { id }
            })
    }
};
