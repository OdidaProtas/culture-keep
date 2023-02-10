// @ts-nocheck
import prisma from '../../../db/prisma';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const contactPhone = String(data.get('contactPhone'));
        const city = String(data.get('city'));
        const town = String(data.get('town'));
        const location = String(data.get('location'));
        const device = url.searchParams.get("basket-id");

        let existingOrder = await prisma.order.findFirst({
            where: {
                fullfiled: false,
                device
            }
        })

        if (existingOrder) {
            await prisma.order.update({
                where: {
                    id: existingOrder.id
                },
                data: {
                    contactPhone,
                    city,
                    town,
                    location
                }
            })
        }

        console.log(existingOrder)

    }
};

export async function load({ url }) {
    let basketId = url.searchParams.get("basket-id")
    const order = await prisma.order.findFirst({
        where: {
            device: basketId,
            fullfiled: false
        }
    })
    return { order }
}