import { error, redirect } from '@sveltejs/kit'

import { LUT_API } from '$env/static/private'
console.log('lut_api', LUT_API);

// @ts-ignore
export async function load({ fetch, params, setHeaders, locals }) {
    // console.log('locals', locals)
    // if (!locals?.user?.id) throw redirect(307, '/')

    const res = await fetch(`http://syntax.fm/api/shows/${params.num}`)
    const data = await res.json()

    if (data.message) {
        throw error(404, {
            message: data.message
        })
    }

    // cache data
    setHeaders({
        'Cache-Control': 'max-age=3600'
    })

    return {
        episode: data,
        // user: locals.user
    }
}