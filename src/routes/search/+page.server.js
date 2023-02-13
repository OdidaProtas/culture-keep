// @ts-nocheck
import prisma from '../../db/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	const q = url.searchParams.get('q');
	let definition

	definition = await prisma.definition.findFirst({
		where: { word: String(q).toLowerCase(), deleted: false },
		include: {
			Variations: true
		}
	});
	if (definition)
		return definition ?? {};

	else definition = await prisma.definition.findFirst({
		where: { english: String(q).toLowerCase(), deleted: false },
		include: {
			Variations: true
		}
	});
	if (definition)
		return definition ?? {};
	else definition = await prisma.definition.findFirst({
		where: { swahili: String(q).toLowerCase(), deleted: false },
		include: {
			Variations: true
		}
	});
	if (definition)
		return definition ?? {};

}



/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request, url, params }) => {
		const data = await request.formData();
		const id = url.searchParams.get("q")
		const deleted = (data.get('delete'));
		const flagged = (data.get("flag"))
		const action = String(data.get("action"))
		if (action === "delete") {
			await prisma.definition.update({
				where: { id },
				data: { deleted: deleted === "true" ? true : false }
			})
		} else if (action === "flag")
			await prisma.definition.update({
				where: { word: id },
				data: { flagged: flagged === "true" ? true : false }
			})
	}
}
