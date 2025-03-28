import { SignInRequest } from '@/types/api/auth';
import { YupShape } from '@/types/YupShape';
import { object, string } from 'yup';

export const SignInSchema = object().shape<YupShape<SignInRequest>>({
  username: string().required('Введите никнейм'),
  password: string().required('Введите пароль'),
});
