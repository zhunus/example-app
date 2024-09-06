import {signIn} from '@/auth';

export default function LoginPage() {
  return (
    <>
      <h1>login</h1>
      <form
        action={async () => {
          'use server';
          await signIn('github', {redirectTo: '/'});
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
    </>
  );
}
