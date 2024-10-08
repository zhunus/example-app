import {signIn} from '@/auth';

export default function GithubForm() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github', {redirectTo: '/profile'});
      }}
    >
      <button className="button github-button" type="submit">
        Войти с GitHub
      </button>
    </form>
  );
}
