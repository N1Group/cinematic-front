import { GetAllRoomsRequest } from '@/types/api/rooms';
import { UUID } from '@/types/UUID';
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

export const useCheckRoomStatus = (id: UUID) => {
  const query = useQuery({
    queryKey: ['rooms/check'],
    queryFn: async () =>
      apiClient({
        url: `/room/${id}/check`,
      }),
  });

  return query;
};
