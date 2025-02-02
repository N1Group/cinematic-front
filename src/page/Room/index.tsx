import { Message } from '@/components/Message';
import { useNavBlocker } from '@/hooks/useNavBlocker';
import { useUserStore } from '@/stores/user';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Input } from '../../components/Input';
import { useRoomSync } from './hooks/useRoomSyns';
import { BackConfirmModal } from './modules/BackConfirmModal';
import { useRoomStore } from './store';
import { $Chat, $InputContainer, $MessageWrapper, $RoomWrapper, $Video } from './style';

export const Room = () => {
  const socket = useRoomSync();

  const MessageWrapperRef = useRef<HTMLDivElement | null>(null);
  const showBackConfirmModal = useRoomStore((state) => state.showBackConfirmModal);
  const user = useUserStore((state) => state.user);
  const roomMessages = useRoomStore((state) => state.roomMessages);
  const setMessages = useRoomStore((state) => state.setMessages);
  const selectedRoom = useRoomStore((state) => state.selectedRoom);
  const [messageText, setMessageText] = useState('');

  const { proceed } = useNavBlocker(() => showBackConfirmModal(true), selectedRoom && selectedRoom?.members.length > 0);

  useEffect(() => {
    setMessages([]);
    showBackConfirmModal(false);
    if (MessageWrapperRef.current) {
      MessageWrapperRef.current.scroll(0, MessageWrapperRef.current.scrollHeight);
    }
  }, []);

  const onEnterPressed = (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      socket.emit('room/chat/send', messageText);
      setMessageText('');
    }
  };

  console.log(roomMessages);

  return (
    <$RoomWrapper>
      <$Video></$Video>
      <$Chat>
        <$MessageWrapper ref={MessageWrapperRef}>
          {roomMessages.map((message) => (
            <Message
              author={message.author.username}
              isSendByUser={message.author.id === user?.id}
              key={message.id}
              text={message.content}
            />
          ))}
        </$MessageWrapper>
        <$InputContainer>
          <Input
            width='100%'
            onKeyUp={onEnterPressed}
            onChange={(event) => setMessageText(event.currentTarget.value)}
            value={messageText}
          />
        </$InputContainer>
      </$Chat>
      <BackConfirmModal onProceed={proceed} />
    </$RoomWrapper>
  );
};
