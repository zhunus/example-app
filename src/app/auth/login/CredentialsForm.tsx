'use client';
import {signIn} from 'next-auth/react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signInSchema} from '@/app/lib/zod';
import {useSearchParams} from 'next/navigation';
import {AlertTriangle, X} from 'lucide-react';
import {useState} from 'react';

type FormData = {
  email: string;
  password: string;
};

export default function CredentialsForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const [isVisible, setIsVisible] = useState(!!error);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: FormData) => {
    signIn('credentials', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isVisible ? (
        <div className="warning-message">
          <AlertTriangle className="warning-icon" />
          <p className="warning-text">Ошибка авторизации</p>
          <button className="close-button" onClick={() => setIsVisible(false)}>
            <X className="close-icon" />
          </button>
        </div>
      ) : null}
      <div className="form-control">
        <label className="input-label" htmlFor="">
          Email
        </label>
        <input
          {...register('email')}
          placeholder="Email"
          className="input"
          name="email"
          type="email"
        />
        <div className="error-message">{errors.email?.message}</div>
      </div>
      <div className="form-control">
        <label className="input-label" htmlFor="">
          Пароль
        </label>
        <input
          {...register('password')}
          placeholder="Пароль"
          className="input"
          name="password"
          type="password"
        />
        <div className="error-message">{errors.password?.message}</div>
      </div>
      <button className="button">Войти</button>
    </form>
  );
}
