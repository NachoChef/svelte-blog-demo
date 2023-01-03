// @ts-nocheck
import { fail } from "@sveltejs/kit"

export const actions = {
    email: async ({ locals, request }) => {
        // if (!locals?.user?.roles?.includes('admin')) {
        //     return fail(401, {
        //         error_message: 'Unauthorized'
        //     })
        // }

        const data = await request.formData()
        const email = data.get('email')
        const name = data.get('name')
        const message = data.get('message')

        console.log(name, email, message);

        return {
            message: 'Email sent!'
        }
    },
    test: () => {
        console.log('hit test action');
    }
}