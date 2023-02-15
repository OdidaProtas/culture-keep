// @ts-nocheck
import prisma from "../../../db/prisma";

export async function load({ }) {
    const students = await prisma.student.findMany()
    return { students }
}