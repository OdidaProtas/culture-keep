import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
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
