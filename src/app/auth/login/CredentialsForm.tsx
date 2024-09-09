import {signIn} from '@/auth';

export default function CredentialsForm() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('credentials', formData, {redirectTo: '/profile'});
      }}
    >
      <div className="form-control">
        <label className="input-label" htmlFor="">
          Email
        </label>
        <input
          placeholder="Email"
          className="input"
          name="email"
          type="email"
        />
      </div>
      <div className="form-control">
        <label className="input-label" htmlFor="">
          Password
        </label>
        <input
          placeholder="Password"
          className="input"
          name="password"
          type="password"
        />
      </div>
      <button className="button">Sign In</button>
    </form>
  );
}
