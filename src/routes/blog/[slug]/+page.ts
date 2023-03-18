import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
interface Params {
  slug: string;
}

interface Result {
  title: string;
  content: string;
}

export function load( { params }: { params: Params }) : Result  {
  if (params.slug === 'hello-world') {
    return {
      title: 'Hello world!',
      content: 'Welcome to our blog.'
    }
  }

  throw error(404, 'Not found');
}
