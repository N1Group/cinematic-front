import { useUserStore } from '@/stores/user';
import { redirect } from 'react-router';

export const authLoader = () => {
  const user = useUserStore.getState().user;

  return () => (!user ? true : redirect('/'));
};
