import { FC } from 'react';
import { useLocation } from 'react-router';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { UserInfo } from '../../../../components/UserInfo';
import { $Header } from './style';

type HeaderProps = {
  avatarUrl?: string;
  userName?: string;
};

export const Header: FC<HeaderProps> = ({ avatarUrl, userName }) => {
  const { pathname } = useLocation();

  return (
    <$Header>
      {pathname === '/' ? <Button>Создать комнату</Button> : <Input height='40px' width='327px' />}
      <UserInfo avatarUrl={avatarUrl} userName={userName} />
    </$Header>
  );
};
