import { useEffect, useRef } from 'react';
import { Input } from '../../components/Input';
import { $Chat, $InputContainer, $MessageWrapper, $RoomWrapper, $Video } from './style';

export default function Room() {
  // const { id } = useParams();
  const MessageWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (MessageWrapperRef.current) {
      MessageWrapperRef.current.scroll(0, MessageWrapperRef.current.scrollHeight);
    }
  }, []);

  return (
    <$RoomWrapper>
      <$Video></$Video>
      <$Chat>
        <$MessageWrapper ref={MessageWrapperRef}>{/* TODO: add mocked messages */}</$MessageWrapper>
        <$InputContainer>
          <Input width='100%' />
        </$InputContainer>
      </$Chat>
    </$RoomWrapper>
  );
}
