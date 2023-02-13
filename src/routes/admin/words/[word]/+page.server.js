// @ts-nocheck
import prisma from "../../../../db/prisma"

export async function load({ params }) {
    const q = params.word

    const word = await prisma.definition.findFirst({
        where: {
            id: q,
        },
        include: {
            Variations: true
        }
    })
    return word
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url, params }) => {
        const data = await request.formData();
        const id = params.word
        const deleted = (data.get('delete'));
        const flagged = (data.get("flag"))
        const action = String(data.get("action"))
        if (action === "delete") {
            await prisma.definition.update({
                where: { id },
                data: { deleted: deleted === "true" ? true : false }
            })
        } else if (action === "flag"){
            await prisma.definition.update({
                where: { id },
                data: { flagged: flagged === "true" ? true : false }
            })}
    }
}