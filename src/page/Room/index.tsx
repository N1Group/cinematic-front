import { Message } from '@/components/Message';
import { Player } from '@/modules/Player';
import { useGetAllMessages } from '@/services/chat';
import { useCheckRoomStatus } from '@/services/rooms';
import { useUserStore } from '@/stores/user';
import { PanInfo } from 'framer-motion';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Input } from '../../components/Input';
import { useRoomSync } from './hooks/useRoomSyns';
import { useRoomStore } from './store';
import { $Chat, $ChatResize, $InputContainer, $MessageWrapper, $RoomWrapper, $Video } from './style';

export const Room = () => {
  const { id } = useParams();
  const socket = useRoomSync();
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);
  const roomMessages = useRoomStore((state) => state.roomMessages);
  const setMessages = useRoomStore((state) => state.setMessages);
  const { data } = useGetAllMessages(id!);
  const { status } = useCheckRoomStatus(id!);

  const messageWrapperRef = useRef<HTMLDivElement | null>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const [messageText, setMessageText] = useState('');
  const [chatWidth, setChatWidth] = useState(400);
  const chatRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(null);
  const startWidth = useRef<number>(null);

  useEffect(() => {
    if (!data) return;
    setMessages(data);
  }, [data]);

  useEffect(() => {
    if (status !== 'error') return;
    navigate('/', { replace: true });
  }, [status]);

  useEffect(() => {
    if (bottomLineRef.current) {
      bottomLineRef.current!.scrollIntoView();
    }
  }, [roomMessages]);

  const onEnterPressed = (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      socket.emit('room/chat/send', messageText);
      setMessageText('');
    }
  };

  const onChatResizeStart = (event: PointerEvent, info: PanInfo) => {
    if (!chatRef.current) return;
    event.stopPropagation();
    event.preventDefault();
    startX.current = info.point.x;
    startWidth.current = chatRef.current.offsetWidth;
  };

  const onChatResize = (_: any, info: PanInfo) => {
    if (startX.current === null || startWidth.current === null) return;
    const newWidth = Math.max(300, Math.min(600, startWidth.current - (info.point.x - startX.current)));
    setChatWidth(newWidth);
  };

  return (
    <$RoomWrapper>
      <$Video>
        <Player />
      </$Video>
      <$Chat ref={chatRef} style={{ width: chatWidth }}>
        <$ChatResize onPan={onChatResize} onPanStart={onChatResizeStart} />
        <$MessageWrapper ref={messageWrapperRef}>
          {roomMessages.map((message) => (
            <Message
              author={message.author.username}
              isSendByUser={message.author.id === user?.id}
              key={message.id}
              text={message.content}
            />
          ))}
          <div ref={bottomLineRef} />
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
    </$RoomWrapper>
  );
};
