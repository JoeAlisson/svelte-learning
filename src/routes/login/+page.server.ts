import type { PageServerLoad, Actions } from "./$types";

import { fail, redirect } from "@sveltejs/kit";
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

  login: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();

    if (!email) {
      return fail(400, { email, missing: true });
    }

    const user = await db.getUser(email);

    if (!user || user.password !== password) {
      return fail(400, { email, incorrect: true });
    }

    cookies.set("sessionid", await db.createSession(user));

    const redirectTo = url.searchParams.get("redirectTo");
    if (redirectTo) {
      throw redirect(303, redirectTo);
    }

    return { success: true };
  },

  register: async ({request}) => {
    const data = await request.formData();
    const email = data.get("email")?.toString();
    const password = data.get("password")?.toString();

    if (!email) {
      return fail(400, { email, missing: true });
    }

    if(!password) {
      return fail(400, { password, missingPassword: true });
    }


    db.createUser(email, password);
    return { registered: true };

  }
} satisfies Actions;
