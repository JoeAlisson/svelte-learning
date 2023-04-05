import type { PageServerLoad } from './$types';

export const load = (() => {
  return {
    one: Promise.resolve(1),
    two: Promise.resolve(2),
    streamed: {
      three: new Promise((fulfil) => {
        setTimeout(() => {
          fulfil(3)
        }, 1000)
      })
    }
  }
}) satisfies PageServerLoad
