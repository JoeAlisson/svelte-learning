import type { PageLoad } from "./$types";

export const load = (async ({ fetch, depends }) => {
  const response = await fetch("http://localhost:5173/api/random-number");

  depends("app:random");

  return {
    number: await response.json()
  };
}) satisfies PageLoad;
