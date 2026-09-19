// Lädt den eingeloggten User bei jedem Request
import { validateSession } from '$lib/server/auth.js';

export async function handle({ event, resolve }) {
    const sessionId = event.cookies.get('session');
    // User in event.locals speichern - überall verfügbar
    event.locals.user = sessionId ? await validateSession(sessionId) : null;
    return resolve(event);
}