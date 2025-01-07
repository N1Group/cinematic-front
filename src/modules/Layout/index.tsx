// import { Header } from '@/components/Header';
import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { $LayoutWrapper } from './style';

export const Layout = () => {
  return (
    <$LayoutWrapper>
      <Header />
      <Outlet />
    </$LayoutWrapper>
  );
};
