import { socketClient } from '@/constants/io';
import { useEffect } from 'react';
import { useParams } from 'react-router';

export const useRoomSync = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log('must be connected to', id);
    if (!id) return;
    const socket = socketClient('/rooms');
    socket.emit('room/join', id);
    socket.on('room/joined', (user) => console.log('user joined', user.username));
    socket.on('room/leaved', (user) => console.log('user leaved', user.username));

    return () => {
      window.history.pushState(null, '', window.location.href);
      socket.emit('room/leave', id);
      socket.off('room/joined');
      socket.off('room/leaved');
    };
  }, [id]);
};
