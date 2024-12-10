import { useUserStore } from '@/stores/user';
import { redirectDocument } from 'react-router';

export const authLoader = () => {
  const user = useUserStore.getState().user;

  return () => (!user ? true : redirectDocument('/'));
};
