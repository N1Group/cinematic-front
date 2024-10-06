import styled from '@emotion/styled';
import { Text } from './Text';
import { Avatar } from './Avatar';
import { FC } from 'react';

const $UserInfo = styled.div({
  display: 'flex',
  gap: '14px',
  background: '#141414',
  alignItems: 'center',
});

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
