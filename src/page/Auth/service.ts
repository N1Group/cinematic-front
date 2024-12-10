import { SignInUser } from '@/api/auth';
import { useUserStore } from '@/stores/user';
import { User } from '@/types/User';
import { apiClient } from '@/utils/apiClient';
import { useMutation } from '@tanstack/react-query';

export const useAuthSignIn = () => {
  const mutation = useMutation({
    mutationKey: ['auth/signIn'],
    mutationFn: (data: SignInUser) =>
      apiClient<User>({
        url: '/auth/signIn',
        method: 'POST',
        data,
      }).then((res) => res.result),
  });

  return mutation;
};

export const useAuthLogout = () => {
  const logout = useUserStore((state) => state.logout);
  const mutation = useMutation({
    mutationKey: ['auth/logout'],
    mutationFn: () => apiClient({ url: '/auth/logout', method: 'POST' }).then((res) => res.result),
    onSettled: logout,
  });

  return mutation;
};
