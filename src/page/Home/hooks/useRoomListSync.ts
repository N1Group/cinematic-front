import { socketClient } from '@/constants/io';
import { Room } from '@/types/Room';
import { UUID } from '@/types/UUID';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useRoomListSync = () => {
  const socket = socketClient();
  const queryClient = useQueryClient();

  useEffect(() => {
    const onRoomCreated = (newRoom: Room) => {
      queryClient.setQueryData(['rooms'], (oldData: Room[]) => [...oldData, newRoom]);
    };

    const onRoomDelete = (roomId: UUID) => {
      queryClient.setQueryData(['rooms'], (oldData: Room[]) => oldData.filter((room) => room.id !== roomId));
    };

    socket.on('room/created', onRoomCreated);
    socket.on('room/deleted', onRoomDelete);

    return () => {
      socket.off('room/created');
      socket.off('room/deleted');
    };
  }, []);
};
