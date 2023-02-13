// @ts-nocheck
import prisma from '../../../../db/prisma';



/** @type {import('./$types').RequestHandler} */
export async function GET({ url, cookies }) {


  const basketId = cookies.get("device-id")

  if (!basketId) return new Response(String(0));

  const basket = await prisma.order.findFirst({
    where: {
      device: basketId,
      status: "draft",
      payment: null
    },
    include: {
      items: true
    }
  })



  const numItems = basket?.items?.length


  return new Response(String(numItems));
}