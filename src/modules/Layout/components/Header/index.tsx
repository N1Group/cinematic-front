import { useCreateRoom } from '@/page/Home/service';
import { useGetUserProfile } from '@/services/user';
import { useLocation } from 'react-router';
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
  const { mutateAsync } = useCreateRoom();
  const avatarUrl = 'https://i.pravatar.cc/300?u=1234567';

  return (
    <$Header>
      {pathname === '/' ? (
        <Button onClick={mutateAsync}>Создать комнату</Button>
      ) : (
        <Input height='40px' width='327px' />
      )}
      <UserInfo avatarUrl={avatarUrl} userName={data?.username} />
    </$Header>
  );
};
