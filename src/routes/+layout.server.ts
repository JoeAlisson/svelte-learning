import type { LayoutServerLoad } from "./$types";

async function getUser(sessionId: string | undefined) {
  return {
    name: 'John Doe',
    sessionId
  }
}

export const load = (async ({ cookies }) => {
  let sessionId = cookies.get('sessionid');
  if (!sessionId) {
    sessionId = String(Math.random() * 10000)
    cookies.set("sessionid", sessionId);
  }

  return {
    user: await getUser(sessionId)
  }

}) satisfies LayoutServerLoad;
