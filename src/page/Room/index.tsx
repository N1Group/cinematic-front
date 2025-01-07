import { useNavBlocker } from '@/hooks/useNavBlocker';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { Input } from '../../components/Input';
import { BackConfirmModal } from './modules/BackConfirmModal';
import { useRoomStore } from './store';
import { $Chat, $InputContainer, $MessageWrapper, $RoomWrapper, $Video } from './style';

export const Room = () => {
  const { id } = useParams();
  const MessageWrapperRef = useRef<HTMLDivElement | null>(null);
  const showBackConfirmModal = useRoomStore((state) => state.showBackConfirmModal);
  const selectedRoom = useRoomStore((state) => state.selectedRoom);

  const { proceed } = useNavBlocker(() => showBackConfirmModal(true), selectedRoom && selectedRoom?.members.length > 0);

  useEffect(() => {
    showBackConfirmModal(false);
    if (MessageWrapperRef.current) {
      MessageWrapperRef.current.scroll(0, MessageWrapperRef.current.scrollHeight);
    }
  }, []);

  // useSocket({
  //   name: 'room/joined',
  //   namespace: 'room',
  //   query: {
  //     roomId: id!,
  //   },
  //   onMessage: (user) => {
  //     console.log('room/joined', user);
  //   },
  // });

  return (
    <$RoomWrapper>
      <$Video></$Video>
      <$Chat>
        <$MessageWrapper ref={MessageWrapperRef}>{/* TODO: add mocked messages */}</$MessageWrapper>
        <$InputContainer>
          <Input width='100%' />
        </$InputContainer>
      </$Chat>
      <BackConfirmModal onProceed={proceed} />
    </$RoomWrapper>
  );
};
