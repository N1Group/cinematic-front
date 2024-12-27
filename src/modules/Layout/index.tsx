// import { Header } from '@/components/Header';
import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { useAuthError } from './hook/useAuthError';
import { $LayoutWrapper } from './style';

export const Layout = () => {
  useAuthError();

  return (
    <$LayoutWrapper>
      <Header />
      <Outlet />
    </$LayoutWrapper>
  );
};
