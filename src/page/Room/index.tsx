import { useParams } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Message } from '../../components/Message';
import { $Chat, $InputContainer, $MessageWrapper, $RoomWrapper, $Video } from './style';
import { useEffect, useRef } from 'react';

export const Room = () => {
  const { id } = useParams();
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
        <$MessageWrapper ref={MessageWrapperRef}>
          <Message color='#FFA049' isSystemMessage name='Система' text='Добро пожаловать!' />
          <Message name='daniaaa1717' text='прнивет всем' />
          <Message name='artem228' text='прнивет всем' avatar='/c1f2a18863a127d71251dd0740442806.jpg' />
          <Message name='slavaMarloy' text='прнивет всем 🙌🙌🙌' />
          <Message
            isMessageAuthor
            text={
              'История о том, как мы должны жить, - это история, посвященная избранным. Ут и масса людей. Аликвам в хендреритской урне. Пеллентеск сидит с Аметом сапиенсом фрингильей, маттисом лигулой-консулом, ультрарисом Морисом. Биография мецената Маттиса теллуса. Что будет в будущем году? Преддверие желудка или двенадцатиперстной кишки, не вызывает опасений в Европе. Хранитель пеллентеска, ни-ни-ни, в самом начале брожения находится в желудке. Пеллентеск - коммодо-лакус в "содалес содалес". Как быстро растут растения в диамантуме, так и быстро растут на месте. В конце концов, это время, когда растения становятся более удобными. '
            }
          />
          <Message
            isMessageAuthor
            text={
              'История о том, как мы должны жить, - это история, посвященная избранным. Ут и масса людей. Аликвам в хендреритской урне. Пеллентеск сидит с Аметом сапиенсом фрингильей, маттисом лигулой-консулом, ультрарисом Морисом. Биография мецената Маттиса теллуса. Что будет в будущем году? Преддверие желудка или двенадцатиперстной кишки, не вызывает опасений в Европе. Хранитель пеллентеска, ни-ни-ни, в самом начале брожения находится в желудке. Пеллентеск - коммодо-лакус в "содалес содалес". Как быстро растут растения в диамантуме, так и быстро растут на месте. В конце концов, это время, когда растения становятся более удобными. '
            }
          />
          <Message name='егор крид' text='прнивет всем 🤗🤗🤗' avatar='/Icon (1).png' />
        </$MessageWrapper>
        <$InputContainer>
          <Input width='100%' />
        </$InputContainer>
      </$Chat>
    </$RoomWrapper>
  );
};
