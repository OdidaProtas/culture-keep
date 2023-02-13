/** @type {import('./$types').RequestHandler} */
export async function POST({ url, request }) {

    let data = await request.formData()

    return new Response(String({
        success: "0000000"
    }))
}