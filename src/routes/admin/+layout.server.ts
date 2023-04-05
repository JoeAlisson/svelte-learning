import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (({ locals }) => {
  if (!locals.user) {
    throw error(401, 'Not logged in');
  }

  if (!locals.user.isAdmin) {
    throw error(403, 'Not an admin');
  }
}) satisfies LayoutServerLoad;
