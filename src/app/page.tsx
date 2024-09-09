import {auth} from '@/auth';
import Link from 'next/link';

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h1>Добро пожаловать в наше приложение!</h1>
      {session ? (
        <Link className="link" href="/profile">
          Страница профиля
        </Link>
      ) : (
        <Link className="link" href="/auth/login">
          Войти
        </Link>
      )}
    </div>
  );
}
