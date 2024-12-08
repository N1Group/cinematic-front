import { User } from '@/types/User';
import { createCustomStore } from '@/utils/createCustomStore';
import { redirect } from 'react-router';

type UserStates = {
  user?: User;
};

type UserActions = {
  setUser: (user?: User) => void;
  logout: () => void;
};

export const useUserStore = createCustomStore({
  name: 'user',
})<UserStates & UserActions>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
  logout: () => {
    set({ user: undefined });
    redirect('/');
  },
}));
