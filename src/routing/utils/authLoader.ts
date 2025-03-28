import { useUserStore } from '@/stores/user';
import { replace } from 'react-router';

export const authLoader = () => {
  const user = useUserStore.getState().user;

  return () => (!user ? true : replace('/'));
};
