import { SignInUser } from '@/api/auth';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Modal } from '@/modules/Modal';
import { useUserStore } from '@/stores/user';
import { checkInput } from '@/utils/checkErrorInput';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { useAuthSignIn } from '../../service';
import { SignInSchema } from './schema';

export const SignIn = () => {
  const nav = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const { mutateAsync: signIn } = useAuthSignIn();

  const formik = useFormik<SignInUser>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      const user = await signIn(values);
      if (!user) return;
      setUser(user);
    },
  });

  return (
    <Modal title='Привет!' description='Чтобы пользоваться нашим сервисом, мы просим авторизоваться.'>
      <Modal.Content>
        <Input
          name='username'
          label='Никнейм'
          placeholder='nickname'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          description={checkInput(formik, 'username')}
          invalid={!!checkInput(formik, 'username')}
        />
        <Input
          name='password'
          label='Пароль'
          type='password'
          placeholder='●●●●●●●●●'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          invalid={!!checkInput(formik, 'password')}
          description={checkInput(formik, 'password')}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => nav('./recovery')}>Не помню</Button>
        <Button
          style='light'
          onClick={formik.handleSubmit}
          disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}>
          Стартуем
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
