import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import {getUserFromDb, hashPassword} from './userDb';
import {signInSchema} from './app/lib/zod';

export const {handlers, signIn, signOut, auth} = NextAuth({
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const {email, password} = await signInSchema.parseAsync(credentials);

          const pwHash = hashPassword(password);

          user = await getUserFromDb(email, pwHash);

          if (!user) {
            throw new Error('User not found.');
          }

          return {email: user.email, name: user.name, image: user.image};
        } catch (error) {
          console.log(error);

          return null;
        }
      },
    }),
  ],
});
