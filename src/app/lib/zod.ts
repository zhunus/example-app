import {object, string} from 'zod';

export const signInSchema = object({
  email: string({required_error: 'Email обязательное поле'})
    .min(1, 'Email обязательное поле')
    .email('Некорректный email'),
  password: string({required_error: 'Пароль обязательное поле'})
    .min(1, 'Пароль обязательное поле')
    .min(8, 'Пароль должен быть больше 8 символов')
    .max(32, 'Пароль должен быть меньше 32 символов'),
});
