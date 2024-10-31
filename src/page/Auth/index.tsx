import { Input } from '@/components/Input';
import { AuthModal } from './modules/AuthModal';
import { $AuthWrapper } from './style';

export const Auth = () => {
  return (
    <$AuthWrapper>
      <AuthModal title='Привет!' description='Чтобы пользоваться нашим сервисом, мы просим авторизоваться.'>
        <Input label='Никнейм' placeholder='nickname' />
        <Input label='Пароль' placeholder='********' />
      </AuthModal>
    </$AuthWrapper>
  );
};
