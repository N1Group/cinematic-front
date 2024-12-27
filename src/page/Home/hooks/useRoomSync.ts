import { useSocket } from '@/hooks/useSocket';
import { Room } from '@/types/Room';
import { useQueryClient } from '@tanstack/react-query';

export const useRoomSync = () => {
  const queryClient = useQueryClient();

  useSocket({
    name: 'room/create',
    onMessage: (data) => {
      console.log('room/create', data);
      queryClient.setQueryData(['rooms'], (oldData: Room[]) => [...oldData, data]);
    },
  });

  useSocket({
    name: 'room/delete',
    onMessage: (data) => {
      console.log('room/delete', data);
      queryClient.setQueryData(['rooms'], (oldData: Room[]) => oldData.filter((room) => room.id !== data.id));
    },
  });
};
