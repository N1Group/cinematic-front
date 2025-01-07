import { useSocket } from '@/hooks/useSocket';
import { Room } from '@/types/Room';
import { useQueryClient } from '@tanstack/react-query';

export const useRoomSync = () => {
  const queryClient = useQueryClient();

  useSocket({
    name: 'room/created',
    namespace: 'rooms',
    onMessage: (data) => {
      console.log('room/created', data);
      queryClient.setQueryData(['rooms'], (oldData: Room[]) => [...oldData, data]);
    },
  });
};
