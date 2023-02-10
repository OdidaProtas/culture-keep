// @ts-nocheck

import prisma from '../../../../db/prisma';


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();
        let basketId = url.searchParams.get("basket-id")
        const phone = String(data.get('phone'));

        let basket = await prisma.order.findFirst({
            where: {
                device: basketId
            },
            include: {
                Payment: true,
                items: true
            }
        })

        if (!basket?.Payment.length) {
            let payment = await prisma.payment.create({
                data: {
                    phone,
                    orderId: basket.id
                }
            })
        } let payment = await prisma.payment.update({
            where: {
                id: basket.Payment[0].id
            },
            data: {
                phone,
                orderId: basket.id
            }
        })


    }
};


export async function load({ url }) {


    const basketId = url.searchParams.get("basket-id")

    const basket = await prisma.order.findFirst({
        where: {
            device: basketId
        },
        include: {
            Payment: true
        }
    })

    return { payment: basket.Payment[0] }


}