import { socketClient } from '@/constants/io';
import { useRoomStore } from '@/page/Room/store';
import { Room } from '@/types/Room';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const useRoomCreateSync = () => {
  const socket = socketClient();
  const setSelectedRoom = useRoomStore((state) => state.setSelectedRoom);
  const nav = useNavigate();

  useEffect(() => {
    const onOwnedRoomCreated = (newRoom: Room) => {
      console.log(newRoom);

      setSelectedRoom(newRoom);
      nav(`/room/${newRoom.id}`);
    };

    socket.on('room/owned/created', onOwnedRoomCreated);

    return () => {
      socket.off('room/owned/created');
    };
  }, []);

  return socket;
};
