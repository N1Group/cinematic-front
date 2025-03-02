import { GetAllRoomMessagesRequest } from '@/types/api/rooms';
import { UUID } from '@/types/UUID';
import { apiClient } from '@/utils/apiClient';
import { useQuery } from '@tanstack/react-query';

export const useGetAllMessages = (id: UUID) => {
  const query = useQuery({
    queryKey: ['chat/messages'],
    staleTime: 1,
    queryFn: async () =>
      apiClient<GetAllRoomMessagesRequest>({
        url: `chat/${id}/messages`,
      }).then((res) => res.result),
  });

  return query;
};
