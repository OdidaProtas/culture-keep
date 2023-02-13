// @ts-nocheck
import prisma from '../../../../../db/prisma';

/** @type {import('./$types').RequestHandler} */
export async function POST({ url, request }) {


    try {
        let data = await request.json()
        const body = (data?.Body) ?? {}
        console.log("body", body)
        console.log("data", data)
        
        const stkCallback = body.stkCallback;
        const checkoutId = stkCallback.CheckoutRequestID
        const responseCode = stkCallback.ResultCode
        const resultDesc = stkCallback.ResultDesc
        const mpesaReceipt = (stkCallback.CallbackMetadata?.Item ?? [])[1].value

        const payment = prisma.payment.findFirst({
            where: {
                checkoutRequestId: checkoutId
            }
        })

        if (payment) {
            prisma.payment.update({
                where: { id: payment.id },
                data: {
                    mpesaReceipt,
                    responseCode,
                    customerMessage: resultDesc
                }
            })
        }

    } catch (e) {
        console.log(e)
    }




    return new Response(String({
        success: "0000000"
    }))
}