import { Outlet } from 'react-router-dom';
import { $AuthWrapper } from './style';

export const Auth = () => {
  return (
    <$AuthWrapper>
      <Outlet />
    </$AuthWrapper>
  );
};
