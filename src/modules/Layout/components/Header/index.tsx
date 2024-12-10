import { useCreateRoom } from '@/page/Home/service';
import { useGetUserProfile } from '@/services/user';
import { useLocation, useNavigate } from 'react-router';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { UserInfo } from '../../../../components/UserInfo';
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
  const nav = useNavigate();

  const onCreateRoom = async () => {
    const room = await createRoom();
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
