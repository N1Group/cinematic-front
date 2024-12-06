import { FC } from 'react';
import { Avatar } from '../Avatar';
import {
  $Message,
  $MessageContainer,
  $MessageContent,
  $MessageName,
  $MessageNameWrapper,
  $MessageSystem,
  $MessageText,
} from './style';
import { MessageProps } from './types';

export const Message: FC<MessageProps> = ({ isMessageAuthor, isSystemMessage, text, name, color, avatar }) => {
  return (
    <$MessageContainer isMessageAuthor={isMessageAuthor}>
      <$Message>
        {!isMessageAuthor && <Avatar url={avatar} isSystemMessage={isSystemMessage} ischat />}
        <$MessageContent>
          <$MessageNameWrapper>
            {!isMessageAuthor && <$MessageName>{name}</$MessageName>}
            {isSystemMessage && <$MessageSystem>Система</$MessageSystem>}
          </$MessageNameWrapper>
          <$MessageText color={color}>{text}</$MessageText>
        </$MessageContent>
      </$Message>
    </$MessageContainer>
  );
};
