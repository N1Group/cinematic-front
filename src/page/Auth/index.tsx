import { Outlet } from 'react-router';
import { $AuthWrapper } from './style';

export function meta() {
  return [{ title: 'Cinematic | Auth' }];
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export default function Auth() {
  return (
    <$AuthWrapper>
      <Outlet />
    </$AuthWrapper>
  );
}
