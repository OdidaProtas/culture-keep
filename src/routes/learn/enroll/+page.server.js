/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url, locals }) => {
        const session = await locals.getSession()
        const user = session?.user
        if(user){
            
        }
    }
}