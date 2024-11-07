import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Modal } from '@/modules/Modal';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const nav = useNavigate();

  return (
    <Modal title='Привет!' description='Чтобы пользоваться нашим сервисом, мы просим авторизоваться.'>
      <Modal.Content>
        <Input label='Никнейм' placeholder='nickname' />
        <Input label='Пароль' type='password' placeholder='●●●●●●●●●' />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => nav('./recovery')}>Не помню</Button>
        <Button style='light'>Стартуем</Button>
      </Modal.Actions>
    </Modal>
  );
};
