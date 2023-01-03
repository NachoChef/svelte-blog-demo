export async function load({ fetch }) {
    const all_res = await fetch('https://syntax.fm/api/shows')
    const all_data = await all_res.json()

    return {
        all_episodes: all_data
    }
}