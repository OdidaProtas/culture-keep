// @ts-ignore
import prisma from "../db/prisma";

export const load = async () => {

	// @ts-ignore
	const words = await prisma.definition.findMany({ take: 5 });

	return { words };
};
