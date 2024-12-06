import { $UserInfo } from './style';

import type { FC } from 'react';
import { Avatar } from '../Avatar';
import { Text } from '../Text';
import type { UserInfoProps } from './types';

export const UserInfo: FC<UserInfoProps> = ({ avatarUrl, userName }) => {
  return (
    <$UserInfo>
      <Text size='body2'>@{userName}</Text>
      <Avatar url={avatarUrl!} />
    </$UserInfo>
  );
};
