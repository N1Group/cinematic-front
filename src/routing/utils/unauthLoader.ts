import { useUserStore } from '@/stores/user';
import { redirect } from 'react-router';

export const unauthRegister = () => {
  const user = useUserStore.getState().user;

  return () => (!user ? redirect('/auth') : true);
};
