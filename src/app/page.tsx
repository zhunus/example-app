import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Добро пожаловать в наше приложение!</h1>
      <Link href="/auth/login">Войти</Link>
    </div>
  );
}
