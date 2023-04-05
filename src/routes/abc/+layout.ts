import type { LayoutLoad } from "./$types";

export const load = (async ({ parent }) => {
  const { a } = await parent()

  return {
    b: a + 1
  };
}) satisfies LayoutLoad;
