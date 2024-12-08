import { SignInUser } from '@/api/auth';
import { YupShape } from '@/types/YupShape';
import { object, string } from 'yup';

export const SignInSchema = object().shape<YupShape<SignInUser>>({
  username: string().required('Введите никнейм'),
  password: string().required('Введите пароль'),
});
