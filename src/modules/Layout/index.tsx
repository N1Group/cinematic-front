import { Header } from '../../components/Header';
import { Outlet } from 'react-router-dom';
import { $LayoutWrapper } from './style';
const Layout = () => {
  return (
    <$LayoutWrapper>
      <Header />
      <Outlet />
    </$LayoutWrapper>
  );
};

export default Layout;
