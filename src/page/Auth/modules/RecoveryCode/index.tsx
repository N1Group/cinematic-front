import { CodeInputs } from '@/components/CodeInputs';
import { Modal } from '@/modules/Modal';
import { useNavigate } from 'react-router';

export const RecoveryCode = () => {
  const nav = useNavigate();

  const onChangeCode = (value: string) => {
    if (value.length === 4) nav('/auth');
  };

  return (
    <Modal
      title='Волшебные циферки'
      description='Почти готово, осталось ввести код подтверждения отправленный на выбранный вами способ восстановления.'>
      <Modal.Content>
        <CodeInputs onChange={onChangeCode} />
      </Modal.Content>
    </Modal>
  );
};
