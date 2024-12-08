import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Modal } from '@/modules/Modal';
import { useNavigate } from 'react-router';

export const clientLoader = () => {
  return {};
};

export const HydrateFallback = () => {
  return <p>Loading...</p>;
};

export const Recovery = () => {
  const randomActionWords = ['Запушить', 'Отправить', 'Закинуть', 'Скинуть', 'Крашнуть сервер'];
  const randomIndex = Math.floor(Math.random() * randomActionWords.length);
  const randomActionWord = randomActionWords[randomIndex];
  const nav = useNavigate();

  const onSend = () => {
    nav('./code');
  };

  return (
    <Modal
      title='Всякое бывает, а теперь к делу.'
      description='Для восстановления пароля, напишите никнейм привязанный к вашему аккаунту.'>
      <Modal.Content>
        <Input label='Никнейм' placeholder='nickname' />
      </Modal.Content>
      <Modal.Actions>
        <Button title='Отправить' onClick={onSend}>
          {randomActionWord}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
