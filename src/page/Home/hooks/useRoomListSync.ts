import { socketClient } from '@/constants/io';
import { useRoomStore } from '@/page/Room/store';
import { Room } from '@/types/Room';
import { UUID } from '@/types/UUID';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const useRoomListSync = () => {
  const socket = socketClient();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const selectedRoom = useRoomStore((state) => state.selectedRoom);

  useEffect(() => {
    const onRoomCreated = (newRoom: Room) => {
      queryClient.setQueryData(['rooms'], (oldData: Room[]) => [...oldData, newRoom]);
    };

    const onRoomDelete = (roomId: UUID) => {
      if (roomId === selectedRoom?.id) {
        return navigate('/', { replace: true });
      }
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
