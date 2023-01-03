// @ts-nocheck
import { sequence } from '@sveltejs/kit/hooks'
import { auth } from '$db/fake_auth'

// runs 1st
async function logger({ event, resolve }) {
    const start_time = Date.now()

    // wait on response, run other hooks and load
    const response = await resolve(event)

    console.log(`${Date.now() - start_time} ${event.request.method} ${event.url.pathname}`)

    return response
}

// runs 2nd
function authorize({ event, resolve }) {
    const user = auth()
    // event.locals.user = user
    return resolve(event)
}

export const handle = sequence(logger, authorize)

// intercepting Fetch
// export function handleFetch({ request, fetch }) {
//     return fetch(request)
// }

// intercept errors
// export function handleError({ error, event }) {
//     return {
//         message: 'OOPS I ERRORED AGAIN, GOT CAUGHT IN A HOOK',
//         code: error.code
//     }
// }