import { CodeInputs } from '@/components/CodeInputs';
import { Modal } from '@/modules/Modal';

export const RecoveryCode = () => {
  return (
    <Modal
      title='Волшебные циферки'
      description='Почти готово, осталось ввести код подтверждения отправленный на выбранный вами способ восстановления.'>
      <Modal.Content>
        <CodeInputs onChange={() => {}} />
      </Modal.Content>
    </Modal>
  );
};
