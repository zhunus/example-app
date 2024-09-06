import {auth} from '@/auth';
import Link from 'next/link';

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h1>Добро пожаловать в наше приложение!</h1>
      {session ? (
        <Link href="/profile">Страница профиля</Link>
      ) : (
        <Link href="/auth/login">Войти</Link>
      )}
    </div>
  );
}
