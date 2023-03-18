import { error } from '@sveltejs/kit';
import type {PageServerLoad } from "./$types";

interface Post {
  title: string;
  content: string;
}

async function getPostFromDatabase(slug: string) : Promise<Post> {
  return {
    title: 'Hello world!',
    content: 'Welcome to our News.'
  }
}

export const load = ( async  ({ params }) => {
  const post = await getPostFromDatabase(params.slug);
  if(post) {
    return post;
  }
  throw error(404, 'Not found');
}) satisfies PageServerLoad;
