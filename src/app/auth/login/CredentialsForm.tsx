import {signIn} from '@/auth';

export default function CredentialsForm() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('credentials', formData, {redirectTo: '/profile'});
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  );
}
