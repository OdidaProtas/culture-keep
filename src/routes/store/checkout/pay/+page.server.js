// @ts-nocheck

import { getTimestamp, mpesaSTKPush } from '$lib/pay/mpesa';
import handleException from '$lib/pay/trycatch';
import { error, redirect } from '@sveltejs/kit';
import prisma from '../../../../db/prisma';


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();
        let basketId = url.searchParams.get("basket-id")
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


        let orderAmount = (basket?.items ?? []).reduce((prev, curr) => {
            return prev + curr.price
        }, 0)


        const stkPushPromise = mpesaSTKPush({
            phone,
            accountReference: basket?.id,
            amount: orderAmount,
            transactionDesc: `Dholuo Dictionary Merch MPESA PAYMENT - ${phone} - ${basket.id}`
        })

        const [stkPushResponse, stkPushError] = await handleException(stkPushPromise)

        if (stkPushError) {
            const payment = await prisma.payment.create({
                data: {
                    phone,
                    status: "error",
                    timeStamp: getTimestamp(),
                    responseCode: "1111"
                }
            })
            await prisma.order.update({
                where: {
                    id: basket.id
                },
                data: {
                    paymentId: payment.id

                }
            })

            throw redirect("302", `/store/orders/${basket.id}`)

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

            throw redirect("302", `/store/orders/${basket.id}`)

        }


    }
};


export async function load({ url }) {

    const basketId = url.searchParams.get("basket-id")

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


    if (!basket)
        throw redirect("302", `/store/orders?ref=${basketId}`)

    const totalAmount = basket?.items?.reduce((prev, curr) => {
        return prev + curr.price;
    }, 0);

    return { payment: { ...basket?.payment, amount: totalAmount } }


}