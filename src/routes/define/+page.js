import { dev } from '$app/environment';
import { redirect } from '@sveltejs/kit';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;


// // @ts-ignore
// export const load = async ({ parent }) => {
//     const { session } = await parent()
//     if (!session?.user) {
//         throw redirect(302, "/auth/signin")
//     }
//     return {}
// }