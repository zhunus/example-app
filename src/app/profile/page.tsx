import {auth, signOut} from '@/auth';
import {redirect} from 'next/navigation';

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    return redirect('/auth/login');
  }

  return (
    <>
      <div>{session.user?.name}</div>
      <div>{session.user?.email}</div>
      <form
        action={async () => {
          'use server';
          await signOut({redirectTo: '/'});
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </>
  );
}
