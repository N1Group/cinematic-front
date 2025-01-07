import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { UserInfo } from '@/components/UserInfo';
import { useRoomStore } from '@/page/Room/store';
import { useCreateRoom } from '@/services/rooms';
import { useGetUserProfile } from '@/services/user';
import { useLocation, useNavigate } from 'react-router';
import { $Header } from './style';

// type HeaderProps = {
//   avatarUrl?: string;
//   userName?: string;
// };

// export const Header: FC<HeaderProps> = ({ avatarUrl, userName }) => {
export const Header = () => {
  const { pathname } = useLocation();
  const { data } = useGetUserProfile();
  const { mutateAsync: createRoom } = useCreateRoom();
  const setSelectedRoom = useRoomStore((state) => state.setSelectedRoom);
  const nav = useNavigate();

  const onCreateRoom = async () => {
    const room = await createRoom();
    setSelectedRoom(room);
    nav(`/room/${room.id}`);
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
