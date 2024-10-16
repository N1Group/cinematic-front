import { FC } from 'react';
import {
  $MessageSystem,
  $MessageContainer,
  $Message,
  $MessageContent,
  $MessageNameWrapper,
  $MessageName,
  $MessageText,
} from './style';
import { Avatar } from '../Avatar';
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
