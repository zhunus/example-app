import {auth} from '@/auth';
import {redirect} from 'next/navigation';
import CredentialsForm from './CredentialsForm';
import GithubForm from './GithubForm';

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    return redirect('/profile');
  }

  return (
    <>
      <h1>login</h1>
      <CredentialsForm />
      <hr />
      <GithubForm />
    </>
  );
}
