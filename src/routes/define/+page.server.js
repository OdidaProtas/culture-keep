// @ts-nocheck
import { convertToSlug } from '$lib/str/slug';
import prisma from '../../db/prisma';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, url, }) => {
		const edit = url.searchParams.get("edit")
		const data = await request.formData();
		const word = String(data.get('word')).toLowerCase().trim();
		const dialect = String(data.get('dialect'));
		const definition = String(data.get('definition'));
		const example = String(data.get('example'));
		const english = String(data.get('english'));
		const swahili = String(data.get('swahili'));
		const plural = String(data.get('plural'));
		const imageUrl = String(data.get('imageUrl'));
		const variations = JSON.parse(String(data.get("variations")))

		const slug = convertToSlug(word)

		if (!JSON.parse(edit ?? "")) {
			const entry = await prisma.definition.create({
				data: { word, definition, dialect, example, english, swahili, plural, imageUrl, slug }
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

			return { entry, success: true }
		}
		if (JSON.parse(edit ?? "")) {
			const q = url.searchParams.get("word")
			const entry = await prisma.definition.update({
				where: { q },
				data: { word, definition, dialect, example, english, swahili, plural, imageUrl, slug }
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

			return { entry, success: true }
		}

		// if (entry)
		// 	throw redirect("302", `/search?q=${entry.word}`)

	}
};


export async function load({ url }) {
	const q = url.searchParams.get("word")
	const word = await prisma.definition.findFirst({
		where: { word: String(q) }
	})
	return { word }
}