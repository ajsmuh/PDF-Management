// Admin-Bereich: alle PDFs von allen Usern sehen und löschen
import { error, redirect, fail } from '@sveltejs/kit';
import pool from '$lib/server/database.js';
import { validateSession } from '$lib/server/auth.js';
import { del } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';

export async function load({ cookies }) {
    const sessionId = cookies.get('session');
    const user = await validateSession(sessionId);

    // Nicht eingeloggt → Login
    if (!user) throw redirect(303, '/login');

    // Kein Admin → kein Zugriff
    if (user.role !== 'admin') throw error(403, 'Kein Zugriff');

    // Alle User laden
    const [users] = await pool.execute(
        'SELECT id, username, role, created_at FROM users ORDER BY created_at DESC'
    );

    // Alle PDFs mit Autoren laden
    const [pdfs] = await pool.execute(
        `SELECT pdfs.id, pdfs.filename, pdfs.url, pdfs.created_at, users.username
         FROM pdfs
         JOIN users ON pdfs.author_id = users.id
         ORDER BY pdfs.created_at DESC`
    );

    return { user, users, pdfs };
}