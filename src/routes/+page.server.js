// @ts-nocheck
import prisma from "../db/prisma";

export const load = async () => {

	const words = await prisma.definition.findMany({ take: 5, where: { deleted: false, flagged: false } });

	return { words };
};
