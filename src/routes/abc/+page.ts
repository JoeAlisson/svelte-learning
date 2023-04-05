import type {PageLoad } from "./$types";

export const load = (async ({ parent }) => {
  const { a, b } = await parent()

  return {
    c: a + b
  };
}) satisfies PageLoad;
