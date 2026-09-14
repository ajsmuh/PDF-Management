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
