import { GetAllRooms } from '@/api/rooms';
import { apiClient } from '@/utils/apiClient';
import { useQuery } from '@tanstack/react-query';

export const useGetAllRooms = () => {
  const query = useQuery({
    queryKey: ['rooms'],
    queryFn: async () => apiClient<GetAllRooms>({ url: '/rooms' }).then((res) => res.result),
  });

  console.log(query.data);

  return query;
};
