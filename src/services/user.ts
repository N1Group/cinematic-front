import { GetProfileRequest } from '@/types/api/users';
import { apiClient } from '@/utils/apiClient';
import { useQuery } from '@tanstack/react-query';

export const useGetUserProfile = () => {
  const query = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      apiClient<GetProfileRequest>({
        url: '/user/profile',
      }).then((res) => res.result),
  });

  return query;
};
