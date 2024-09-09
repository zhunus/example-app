import {auth, signOut} from '@/auth';
import Image from 'next/image';
import {redirect} from 'next/navigation';
import styles from './ProfilePage.module.css';

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    return redirect('/auth/login');
  }

  return (
    <div className={styles.profilePage}>
      {session.user?.image ? (
        <Image
          className={styles.profileImage}
          src={session.user.image}
          alt="User image"
          width={300}
          height={300}
        />
      ) : null}
      <div className={styles.username}>{session.user?.name}</div>
      <div className={styles.email}>{session.user?.email}</div>
      <form
        action={async () => {
          'use server';
          await signOut({redirectTo: '/'});
        }}
      >
        <button className="button" type="submit">
          Выйти
        </button>
      </form>
    </div>
  );
}
