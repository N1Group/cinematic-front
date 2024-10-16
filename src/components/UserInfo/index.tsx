import { FC } from 'react';
import { $UserInfo } from './style';

import { Avatar } from '../Avatar';
import { Text } from '../Text';
import { UserInfoProps } from './types';



export const UserInfo: FC<UserInfoProps> = ({ avatarUrl, userName }) => {
  return (
    <$UserInfo>
      <Text type={'h2'}>{userName}</Text>
      <Avatar url={avatarUrl!} />
    </$UserInfo>
  );
};
