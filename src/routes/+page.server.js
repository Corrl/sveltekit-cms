import {error} from '@sveltejs/kit';

export async function load({params}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const post = await response.json()
    if (post) {
        return {
            post
        };
    }
    throw error(404, 'Not found');
}