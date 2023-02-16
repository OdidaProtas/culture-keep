// @ts-nocheck

import { getTimestamp, mpesaSTKPush } from '$lib/pay/mpesa';
import handleException from '$lib/pay/trycatch';
import { error, redirect } from '@sveltejs/kit';
import prisma from '../../../../db/prisma';


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();
        let basketId = cookies.get("device-id")
        const phone = String(data.get('phone'));

        let basket = await prisma.order.findFirst({
            where: {
                device: basketId,
                status: "draft",
                payment: null
            },
            include: {
                payment: true,
                items: true
            }
        })


        if (!basket) {
            return { error: true }
        }


        let orderAmount = (basket?.items ?? []).reduce((prev, curr) => {
            return prev + curr.price
        }, 0)


        const stkPushPromise = mpesaSTKPush({
            phone,
            accountReference: basket?.id,
            amount: orderAmount,
            transactionDesc: `Dholuo Dictionary Merch MPESA PAYMENT - ${phone} - ${basket?.id}`
        })

        const [stkPushResponse, stkPushError] = await handleException(stkPushPromise)



        if (stkPushError) {
            return { error: true }
        }

        if (stkPushResponse) {

            let paymentRequestInformation = stkPushResponse

            const payment = await prisma.payment.create({
                data: {
                    phone,
                    timeStamp: getTimestamp(),
                    checkoutRequestId: paymentRequestInformation.CheckoutRequestID,
                    customerMessage: paymentRequestInformation.CustomerMessage,
                    responseCode: paymentRequestInformation.ResponseCode
                }
            })
            await prisma.order.update({
                where: {
                    id: basket.id
                },
                data: {
                    status: "placed",
                    paymentId: payment.id
                }
            })

            return { success: true }
        }


    }
};


export async function load({ url, cookies }) {

    const basketId = cookies.get("device-id")

    const basket = await prisma.order.findFirst({
        where: {
            device: basketId,
            status: "draft",
        },
        include: {
            payment: true,
            items: true
        }
    })


    if (!basket || !basket.items.length)
        throw redirect("302", `/store/orders?ref=${basketId}`)

    const totalAmount = basket?.items?.reduce((prev, curr) => {
        return prev + (curr.price * curr.quantity);
    }, 0);

    return { payment: { ...basket?.payment, amount: totalAmount } }


}