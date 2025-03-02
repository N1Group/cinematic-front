import { useUserStore } from '@/stores/user';
import { replace } from 'react-router';

export const unauthRegister = () => {
  const user = useUserStore.getState().user;

  return () => (!user ? replace('/auth') : true);
};
