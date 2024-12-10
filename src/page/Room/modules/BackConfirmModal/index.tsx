import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { Modal } from '@/modules/Modal';
import { useLeaveRoom } from '@/services/rooms';
import { useUserStore } from '@/stores/user';
import { FC } from 'react';
import { useRoomStore } from '../../store';

type BackConfirmModalProps = {
  onProceed: () => void;
};

export const BackConfirmModal: FC<BackConfirmModalProps> = ({ onProceed }) => {
  const backConfirmModal = useRoomStore((state) => state.backConfirmModal);
  const showBackConfirmModal = useRoomStore((state) => state.showBackConfirmModal);
  const setSelectedRoom = useRoomStore((state) => state.setSelectedRoom);
  const { mutateAsync: leaveRoom, isPending } = useLeaveRoom();
  const user = useUserStore((state) => state.user);
  const room = useRoomStore((state) => state.selectedRoom);

  const _onProceed = async () => {
    try {
      await leaveRoom({ roomId: room!.id, userId: user!.id });
      onProceed();
      showBackConfirmModal(false);
    } finally {
      setSelectedRoom();
    }
  };

  if (!user || !room) return;
  return (
    <Modal title='Вы уверены?' open={backConfirmModal}>
      <Modal.Content>
        <Text>Если вы покините комнату, она удалится!</Text>
      </Modal.Content>
      <Modal.Actions>
        <Button style='light' onClick={() => showBackConfirmModal(false)}>
          Я передумал
        </Button>
        <Button onClick={_onProceed} disabled={isPending}>
          Покинуть
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
