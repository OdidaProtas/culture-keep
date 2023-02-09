import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, url }) => {
		const data = await request.formData();
		const word = String(data.get('q'));
		const color = String(data.get('color'));
		const type = String(data.get('type'));
		const back = String(data.get('back'));
		const size = String(data.get('size'));
		const price = parseInt(String(data.get('price')));
		const quantity = parseInt(String(data.get('quantity')));
		const device = (String(data.get('device')));

		let existingOrder = await prisma.order.findFirst({
			where: {
				fullfiled: false,
				device
			}
		})

		if (!existingOrder) {
			let order = await prisma.order.create({
				data: {
					device
				}
			})
			let item = await prisma.orderItem.create({
				data: {
					orderId: order.id,
					type,
					word,
					color,
					back,
					size,
					price,
					quantity
				}
			})
		} else {
			let item = await prisma.orderItem.create({
				data: {
					orderId: existingOrder.id,
					type,
					word,
					color,
					back,
					size,
					price,
					quantity

				}
			})

		}

	}
};
