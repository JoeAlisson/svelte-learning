import type { LayoutLoad } from "./$types";

export const load = (() => {
  return { a: 1 }
}) satisfies LayoutLoad;
