import type { PageServerLoad, Actions } from "./$types";

export const load = ((event) => {
  return {
    user: event.locals.user
  };
}) satisfies PageServerLoad;

export const actions = {
  logout: async (event) => {
    event.cookies.delete("sessionid");
    event.locals.user = null
  }
} satisfies Actions;
