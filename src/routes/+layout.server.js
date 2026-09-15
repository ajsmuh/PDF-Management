// User aus Session bei jedem Request laden
import { validateSession } from '$lib/server/auth.js';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    const sessionId = cookies.get('session');
    // Gibt null zurück wenn nicht eingeloggt oder Session abgelaufen
    const user = await validateSession(sessionId);
    return { user };
}