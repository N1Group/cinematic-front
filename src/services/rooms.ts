import { GetAllRoomsRequest } from '@/types/api/rooms';
import { apiClient } from '@/utils/apiClient';
import { useQuery } from '@tanstack/react-query';

export const useGetAllRooms = () => {
  const query = useQuery({
    queryKey: ['rooms'],
    queryFn: async () =>
      apiClient<GetAllRoomsRequest>({
        url: '/rooms',
      }).then((res) => res.result),
  });

  return query;
};
