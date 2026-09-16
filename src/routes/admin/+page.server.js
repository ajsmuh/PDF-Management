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

export const actions = {
    // PDF löschen — Admin kann alle PDFs löschen
    deletePdf: async ({ request, cookies }) => {
        const sessionId = cookies.get('session');
        const user = await validateSession(sessionId);
        if (!user || user.role !== 'admin') throw error(403, 'Kein Zugriff');

        const formData = await request.formData();
        const id = formData.get('id');

        // Blob-URL holen
        const [rows] = await pool.execute(
            'SELECT url FROM pdfs WHERE id = ?', [id]
        );

        // Aus Vercel Blob löschen
        if (rows.length > 0) {
            try {
                await del(rows[0].url, { token: BLOB_READ_WRITE_TOKEN });
            } catch (err) {
                console.warn('Blob löschen fehlgeschlagen:', err.message);
            }
        }

        await pool.execute('DELETE FROM pdfs WHERE id = ?', [id]);
        return { success: true };
    },
};