import * as crypto from 'crypto';

export const userDb = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    image: '/avatar.jpg',
    password: '12345678',
  },
];

export function hashPassword(password: string): string {
  const SALT = process.env.PASSWORD_SALT;

  if (!SALT) {
    throw new Error('PASSWORD_SALT environment variable is not set');
  }

  const hash = crypto
    .pbkdf2Sync(password, SALT, 1000, 64, 'sha512')
    .toString('hex');

  return hash;
}

export async function getUserFromDb(email: string, passwordHash: string) {
  return userDb.find(
    (user) =>
      user.email === email && hashPassword(user.password) === passwordHash
  );
}
