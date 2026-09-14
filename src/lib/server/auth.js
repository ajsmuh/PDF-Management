// Passwort-Hashing und Session-Verwaltung
import pool from './database.js';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

// Passwort hashen beim Registrieren — nie im Klartext speichern!
export async function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

// Passwort prüfen beim Login
export async function verifyPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

// Neue Session erstellen nach Login/Register
export async function createSession(userId) {
const sessionId = randomUUID();
const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 Tage
await pool.execute(
'INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)',
[sessionId, userId, expiresAt]
);
return sessionId;
}

// User anhand Session-ID laden — prüft ob Session noch gültig ist
export async function validateSession(sessionId) {
    // Kein Cookie → nicht eingeloggt
    if (!sessionId) return null;

    const [rows] = await pool.execute(
        `SELECT u.id, u.username, u.role
         FROM sessions s
         JOIN users u ON s.user_id = u.id
         WHERE s.id = ? AND s.expires_at > NOW()`,
        [sessionId]
    );
    return rows[0] ?? null;
}

// Session löschen beim Logout
export async function invalidateSession(sessionId) {
if (!sessionId) return;
await pool.execute('DELETE FROM sessions WHERE id = ?', [sessionId]);
}