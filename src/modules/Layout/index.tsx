// import { Header } from '@/components/Header';
import { useRoomListSync } from '@/page/Home/hooks/useRoomListSync';
import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { $LayoutWrapper } from './style';

export const Layout = () => {
  useRoomListSync();
  return (
    <$LayoutWrapper>
      <Header />
      <Outlet />
    </$LayoutWrapper>
  );
};
