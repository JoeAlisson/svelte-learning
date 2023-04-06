import type { Handle } from "@sveltejs/kit";
import { db } from "$lib/server/db";

export const handle = (async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionid");
  if (sessionId) {
    event.locals.user = await db.getUserFromSession(sessionId);
  }
  return resolve(event);
}) satisfies Handle;
