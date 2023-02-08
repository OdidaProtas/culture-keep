import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const load = async () => {

	const words = await prisma.definition.findMany({ take: 5 });

	return { words };
};
