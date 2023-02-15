// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import prisma from '../../../db/prisma';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const contactPhone = String(data.get('contactPhone'));
        const city = String(data.get('city'));
        const town = String(data.get('town'));
        const location = String(data.get('location'));
        const device = cookies.get("device-id");

        let existingOrder = await prisma.order.findFirst({
            where: {
                fullfiled: false,
                device,
                status: "draft"
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


    }
};

export async function load({ url, cookies }) {
    let basketId = cookies.get("device-id")
    const order = await prisma.order.findFirst({
        where: {
            device: basketId,
            fullfiled: false,
            status: "draft",
            payment: null
        }
    })
    if (!order)
        throw redirect("302", `/store/basket`)
    return { order }
}