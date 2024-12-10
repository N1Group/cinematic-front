import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { Modal } from '@/modules/Modal';
import { FC } from 'react';
import { useRoomStore } from '../../store';

type BackConfirmModalProps = {
  onProceed: () => void;
};

export const BackConfirmModal: FC<BackConfirmModalProps> = ({ onProceed }) => {
  const backConfirmModal = useRoomStore((state) => state.backConfirmModal);
  const showBackConfirmModal = useRoomStore((state) => state.showBackConfirmModal);

  const _onProceed = () => {
    showBackConfirmModal(false);
    onProceed();
  };

  return (
    <Modal title='Вы уверены?' open={backConfirmModal}>
      <Modal.Content>
        <Text>Если вы покините комнату, она удалится!</Text>
      </Modal.Content>
      <Modal.Actions>
        <Button style='light' onClick={() => showBackConfirmModal(false)}>
          Я передумал
        </Button>
        <Button onClick={_onProceed}>Покинуть</Button>
      </Modal.Actions>
    </Modal>
  );
};
