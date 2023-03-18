import { error } from '@sveltejs/kit';

interface Params {
  slug: string;
}

interface Result {
  title: string;
  content: string;
}

/** @type {import('./$types').PageLoad} */
export function load( { params }: { params: Params }) : Result  {
  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog.'
    }
  }

  throw error(404, 'Not found');
}
