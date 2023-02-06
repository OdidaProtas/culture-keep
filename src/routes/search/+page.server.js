import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	const q = url.searchParams.get('q');
	const definition = await prisma.definition.findFirst({
		where: { word: String(q).toLowerCase() }
	});
	return definition ?? {};
}
