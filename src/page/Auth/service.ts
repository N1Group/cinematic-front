import { SignInUser } from '@/api/auth';
import { User } from '@/types/User';
import { apiClient } from '@/utils/apiClient';
import { useMutation } from '@tanstack/react-query';

export const useUserSignIn = () => {
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
