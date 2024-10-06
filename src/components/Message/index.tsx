import { FC } from 'react';
import { $MessageSystem, $MessageContainer, $Message, $MessageAvatar, $MessageContent, $MessageNameWrapper, $MessageName, $MessageText } from './style';

interface Props {
	isMessageUser?: boolean;
	isSystemMessage?: boolean;
	text?: string;
	color?: '#FFA049' | '#FF4949';
	name?: string;
	bgColor?: string;
	avatar?: string;
}

export const Message: FC<Props> = ({ isMessageUser, isSystemMessage, text, name, color, avatar }) => {
	return (
		<$MessageContainer isMessageUser={isMessageUser}>
			<$Message>
				{isMessageUser ? null : <$MessageAvatar background={avatar ? '#222' : '#3F3D67'} border={`1px solid  ${avatar ? '#373737' : '#2F2E4E'}`} img={avatar ?? '/Icon.png'} />}
				<$MessageContent>
					<$MessageNameWrapper>
						{isMessageUser ? null : <$MessageName>{name}</$MessageName>}
						{isSystemMessage ? <$MessageSystem>Система</$MessageSystem> : null}
					</$MessageNameWrapper>
					<$MessageText color={color}>{text}</$MessageText>
				</$MessageContent>
			</$Message>
		</$MessageContainer>
	);
};
