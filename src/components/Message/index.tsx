import { FC } from 'react';
import { Avatar } from '../Avatar';
import { $Message, $MessageContainer, $MessageContent, $MessageName, $MessageNameWrapper, $MessageText } from './style';
import { MessageProps } from './types';

export const Message: FC<MessageProps> = ({ author, text, color, avatar, isSendByUser }) => {
  return (
    <$MessageContainer isSendByUser={isSendByUser}>
      <$Message>
        {!isSendByUser && <Avatar url={avatar} isInChat />}
        <$MessageContent>
          {!isSendByUser && (
            <$MessageNameWrapper>
              <$MessageName>{author}</$MessageName>
              {/* {isSystemMessage && <$MessageSystem>Система</$MessageSystem>} */}
            </$MessageNameWrapper>
          )}
          <$MessageText color={color}>{text}</$MessageText>
        </$MessageContent>
      </$Message>
    </$MessageContainer>
  );
};
