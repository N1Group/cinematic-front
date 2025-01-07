import { GetAllRoomsRequest } from '@/types/api/rooms';
import { Room } from '@/types/Room';
import { apiClient } from '@/utils/apiClient';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

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

export const useCreateRoom = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ['room/create'],
    mutationFn: async () =>
      apiClient<Room>({
        url: '/room/create',
        method: 'POST',
      }).then((res) => res.result),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['rooms'] }),
  });

  return mutation;
};
