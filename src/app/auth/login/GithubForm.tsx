import {signIn} from '@/auth';

export default function GithubForm() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github', {redirectTo: '/profile'});
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  );
}
