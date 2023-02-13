// @ts-nocheck
import prisma from '../db/prisma';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	let deviceId = cookies.get('device-id');
	if (!deviceId) {
		let random = Math.round(Math.floor(Math.random() * (Math.random() * 123666)));
		let date = Date.now();
		let idDraft = `${random}${date}`;
		cookies.set('device-id', idDraft);
	}

	let numCart = 0;

	if (deviceId) {
		const basket = await prisma.order.findFirst({
			where: {
				device: deviceId,
				status: 'draft',
				payment: null
			},
			include: {
				items: true
			}
		});

		numCart = basket?.items?.length ?? 0;
	}

	return {
		session: await locals.getSession(),
		cartLength: numCart
	};
};
