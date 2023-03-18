import { error } from '@sveltejs/kit';
interface Params {
  slug: string;
}

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

/** @type {import('./$types').PageServerLoad} */
export async function load( { params }: { params: Params }) : Promise<Post>  {
  const post = await getPostFromDatabase(params.slug);
  if(post) {
    return post;
  }
  throw error(404, 'Not found');
}
