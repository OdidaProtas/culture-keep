// @ts-nocheck

import prisma from '../../../../db/prisma';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, url }) => {
		const data = await request.formData();
		const word = String(data.get('q'));
		const color = String(data.get('color'));
		const type = String(data.get('type'));
		const back = String(data.get('back'));
		const size = String(data.get('size'));
		const textColor = String(data.get('textColor'));
		const price = parseInt(String(data.get('price')));
		const quantity = parseInt(String(data.get('quantity')));
		const device = (String(data.get('device')));

		let existingOrder = await prisma.order.findFirst({
			where: {
				device,
				status: "draft",
				payment: null
			}
		})

		if (!existingOrder) {
			let order = await prisma.order.create({
				data: {
					device
				}
			})
			await prisma.orderItem.create({
				data: {
					orderId: order.id,
					type,
					word,
					color,
					back,
					size,
					price,
					quantity,
					textColor
				}
			})
		} else {
			await prisma.orderItem.create({
				data: {
					orderId: existingOrder.id,
					type,
					word,
					color,
					back,
					size,
					price,
					quantity,
					textColor

				}
			})

		}

	}
};


export async function load({ url }) {
	let definition = await prisma.definition.findFirst({
		where: {
			word: url.searchParams.get("q") ?? ""
		}
	})


	return { definition }
}