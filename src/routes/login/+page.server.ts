import type { PageServerLoad, Actions } from "./$types";

import { fail } from "@sveltejs/kit";
import { db } from "$lib/server/db";

export const load = (async ({ cookies }) => {
  const sessionId = cookies.get("sessionid");
  if (!sessionId) {
    return { user: undefined };
  }
  const user = await db.getUserFromSession(sessionId);
  return { user };
}) satisfies PageServerLoad;


export const actions = {

  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email")?.toString();
    const password = data.get("password");

    if (!email) {
      return fail(400, { email, missing: true });
    }

    const user = await db.getUser(email);

    if (!user || user.password !== password) {
      return fail(400, { email, incorrect: true });
    }

    cookies.set("sessionid", await db.createSession(user));
    return { success: true };
  },

  register: async (event) => {
    // TODO register the user
  }
} satisfies Actions;
