// @ts-nocheck

import prisma from '../../../../db/prisma';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, url }) => {
		const data = await request.formData();
		const word = String(data.get('word')).toLowerCase();
		const dialect = String(data.get('dialect'));
		const definition = String(data.get('definition'));
		const example = String(data.get('example'));
		const english = String(data.get('english'));
		const swahili = String(data.get('swahili'));

		const entry = await prisma.definition.create({
			data: { word, definition, dialect, example, english, swahili }
		});

		return entry

	}
};
