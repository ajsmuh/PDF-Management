// PDF hochladen und herunterladen (nur eingeloggte User)
import { fail, redirect } from '@sveltejs/kit';
import { put, del } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';
import pool from '$lib/server/database.js';
import { validateSession } from '$lib/server/auth.js';

export async function load({ cookies }) {
    const sessionId = cookies.get('session');
    const user = await validateSession(sessionId);

    // Nicht eingeloggt → Login
    if (!user) throw redirect(303, '/login');

    // Admin gehört auf die Admin-Seite
    if (user.role === 'admin') throw redirect(303, '/admin');

    // Eigene PDFs laden
    const [pdfs] = await pool.execute(
        `SELECT id, filename, url, created_at
         FROM pdfs WHERE author_id = ?
         ORDER BY created_at DESC`,
        [user.id]
    );

    return { user, pdfs };
}