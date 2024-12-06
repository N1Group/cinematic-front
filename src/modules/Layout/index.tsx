// import { Header } from '@/components/Header';
import { Header } from '@/modules/Layout/components/Header';
import axios from 'axios';
import { Outlet } from 'react-router';
import type { Route } from './+types/index';
import { $LayoutWrapper } from './style';
import { Root } from './types';

export const clientLoader = async () => {
  return await axios<Root>('https://randomuser.me/api?results=1').then((res) => res.data);
};

export default function Layout({ loaderData }: Route.ComponentProps) {
  const user = loaderData.results[0];

  return (
    <$LayoutWrapper>
      <Header avatarUrl={user.picture.large} userName={user.login.username} />
      <Outlet />
    </$LayoutWrapper>
  );
}
