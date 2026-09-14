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