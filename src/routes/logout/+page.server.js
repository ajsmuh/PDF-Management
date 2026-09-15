import { redirect } from '@sveltejs/kit';
import { invalidateSession } from '$lib/server/auth.js';

export const actions = {
    default: async ({ cookies }) => {
        const sessionId = cookies.get('session');

        
    }
};