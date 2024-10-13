import { FC } from 'react';
import { $UserInfo } from './style';

import { Avatar } from '../Avatar';
import { Text } from '../Text';

interface Props {
	userName?: string;
	avatarUrl?: string;
}

export const UserInfo: FC<Props> = ({ avatarUrl, userName }) => {
	return (
		<$UserInfo>
			<Text type={'h2'}>{userName}</Text>
			<Avatar url={avatarUrl!} />
		</$UserInfo>
	);
};
