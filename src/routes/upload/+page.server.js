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

export const actions = {
    // PDF hochladen und in Vercel Blob speichern
    upload: async ({ request, cookies }) => {
        const sessionId = cookies.get('session');
        const user = await validateSession(sessionId);
        if (!user) throw redirect(303, '/login');

        const formData = await request.formData();
        const file = formData.get('pdf');

        // Kein File ausgewählt
        if (!file || file.size === 0) {
            return fail(400, { error: 'Bitte ein PDF auswählen.' });
        }

        // Nur PDFs erlaubt
        if (file.type !== 'application/pdf') {
            return fail(400, { error: 'Nur PDF-Dateien sind erlaubt.' });
        }

        // PDF in Vercel Blob hochladen
        const uploadedBlob = await put(
            `pdfs/${Date.now()}-${file.name}`,
            file,
            { access: 'public', token: BLOB_READ_WRITE_TOKEN }
        );

        // URL in Datenbank speichern
        await pool.execute(
            'INSERT INTO pdfs (filename, url, author_id) VALUES (?, ?, ?)',
            [file.name, uploadedBlob.url, user.id]
        );

        return { success: true };
    },

    
}