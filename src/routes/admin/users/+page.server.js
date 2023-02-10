// @ts-nocheck
import prisma from "../../../db/prisma";

export async function load({}){
    const users = await prisma.user.findMany({})

    return {users}
}