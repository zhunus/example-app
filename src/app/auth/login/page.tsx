import {auth} from '@/auth';
import {redirect} from 'next/navigation';
import CredentialsForm from './CredentialsForm';
import GithubForm from './GithubForm';
import styles from './LoginPage.module.css';

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    return redirect('/profile');
  }

  return (
    <div className={styles.loginPage}>
      <CredentialsForm />
      <GithubForm />
    </div>
  );
}
