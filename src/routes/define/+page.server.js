// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import prisma from '../../db/prisma';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, url, }) => {
		const data = await request.formData();
		const word = String(data.get('word')).toLowerCase();
		const dialect = String(data.get('dialect'));
		const definition = String(data.get('definition'));
		const example = String(data.get('example'));
		const english = String(data.get('english'));
		const swahili = String(data.get('swahili'));
		const plural = String(data.get('plural'));
		const variations = JSON.parse(String(data.get("variations")))
		const entry = await prisma.definition.create({
			data: { word, definition, dialect, example, english, swahili, plural }
		});

		for (let variation of variations) {
			await prisma.variations.create({
				data: {
					word: variation.word,
					dialect: variation.dialect,
					definitionId: entry.id
				}
			})
		}

		if (entry)
			throw redirect("302", `/search?q=${entry.word}`)

	}
};
