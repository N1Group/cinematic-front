import { Outlet } from 'react-router';
import { $AuthWrapper } from './style';

export const Auth = () => {
  return (
    <$AuthWrapper>
      <Outlet />
    </$AuthWrapper>
  );
};
