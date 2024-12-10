import { GetAllRoomsRequest, RoomActionRequest } from '@/types/api/rooms';
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

export const useJoinRoom = () => {
  const mutation = useMutation({
    mutationKey: ['room/join'],
    mutationFn: async ({ roomId, userId }: RoomActionRequest) =>
      apiClient<Room>({
        url: `/room/join/${roomId}`,
        method: 'POST',
        data: { userId },
      }).then((res) => res.result),
  });

  return mutation;
};

export const useLeaveRoom = () => {
  const mutation = useMutation({
    mutationKey: ['room/leave'],
    mutationFn: async ({ roomId, userId }: RoomActionRequest) =>
      apiClient({
        url: `/room/leave/${roomId}`,
        method: 'POST',
        data: { userId },
      }).then((res) => res.result),
  });

  return mutation;
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
