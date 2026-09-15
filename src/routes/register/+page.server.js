// Register Action
import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/database.js';
import { hashPassword, createSession } from '$lib/server/auth.js';

export const actions = {
    register: async ({ request, cookies }) => {
        const form = await request.formData();
        const username = form.get('username');
        const password = form.get('password');

        // Felder leer prüfen
        if (!username || !password) {
            return fail(400, { error: 'Bitte alle Felder ausfüllen.' });
        }

        
    }
};