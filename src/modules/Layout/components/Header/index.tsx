import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { UserInfo } from '@/components/UserInfo';
import { useGetUserProfile } from '@/services/user';
import { useLocation } from 'react-router';
import { useRoomCreateSync } from '../../hooks/useRoomCreateSync';
import { $Header } from './style';

// type HeaderProps = {
//   avatarUrl?: string;
//   userName?: string;
// };

// export const Header: FC<HeaderProps> = ({ avatarUrl, userName }) => {
export const Header = () => {
  const { pathname } = useLocation();
  const { data } = useGetUserProfile();
  const socket = useRoomCreateSync();

  const onCreateRoom = async () => {
    socket.emit('room/create');
    console.log(socket.id);
  };

  return (
    <$Header>
      {pathname === '/' ? (
        <Button onClick={onCreateRoom}>Создать комнату</Button>
      ) : (
        <Input height='40px' width='327px' />
      )}
      <UserInfo userName={data?.username} />
    </$Header>
  );
};
