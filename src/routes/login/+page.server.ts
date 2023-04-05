import type { PageServerLoad, Actions } from './$types';
import { db } from '$lib/server/db';

export const load = (async ({ cookies }) => {
  const sessionId = cookies.get('sessionid');
  if(!sessionId) {
    return { user: undefined }
  }
  const user = await db.getUserFromSession(sessionId);
  return { user }
}) satisfies PageServerLoad;


export const actions = {

  login: async ({ cookies, request}) => {
    const data = await request.formData();
    const email = data.get('email')?.toString() || "";
    const password = data.get('password');

    const user = await db.getUser(email)
    if(user && user.password === password) {
      cookies.set('sessionid', await db.createSession(user));
      console.log("Success")
      return { success: true }
    }
    return { success: false }
  },

  register: async (event) => {
    // TODO register the user
  }
} satisfies Actions;
