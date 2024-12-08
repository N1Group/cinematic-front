import { $UserInfo } from './style';

import { useUserStore } from '@/stores/user';
import type { FC } from 'react';
import { Avatar } from '../Avatar';
import { Icon } from '../icon';
import { Text } from '../Text';
import type { UserInfoProps } from './types';

export const UserInfo: FC<UserInfoProps> = ({ avatarUrl, userName }) => {
  const logout = useUserStore((state) => state.logout);

  return (
    <$UserInfo>
      <Text size='body2'>@{userName}</Text>
      <Avatar url={avatarUrl!} />
      <Icon name='Logout' color='#E6E6E6' onClick={logout} />
    </$UserInfo>
  );
};
