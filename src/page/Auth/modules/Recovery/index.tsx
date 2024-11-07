import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Modal } from '@/modules/Modal';

export const Recovery = () => {
  const randomActionWords = ['Поиграть', 'Помочь', 'Пошутить', 'Забанить', 'Крашнуть'];
  const randomIndex = Math.floor(Math.random() * randomActionWords.length);
  const randomActionWord = randomActionWords[randomIndex];

  return (
    <Modal
      title='Всякое бывает, а теперь к делу.'
      description='Для восстановления пароля, напишите никнейм привязанный к вашему аккаунту.'>
      <Modal.Content>
        <Input label='Никнейм' placeholder='nickname' />
      </Modal.Content>
      <Modal.Actions>
        <Button>{randomActionWord}</Button>
      </Modal.Actions>
    </Modal>
  );
};
