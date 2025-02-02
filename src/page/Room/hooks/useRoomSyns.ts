import { socketClient } from '@/constants/io';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useRoomStore } from '../store';

export const useRoomSync = () => {
  const { id } = useParams();
  const socket = socketClient();
  const addMessage = useRoomStore((state) => state.addMessage);

  useEffect(() => {
    if (!id) return;
    socket.emit('room/join', id);
    socket.on('room/joined', (user) => console.log('user joined', user.username));
    socket.on('room/leaved', (user) => console.log('user leaved', user.username));
    socket.on('room/chat/sended', addMessage);

    return () => {
      // window.history.pushState(null, '', window.location.href);
      socket.emit('room/leave', id);
      socket.off('room/joined');
      socket.off('room/leaved');
    };
  }, [id]);

  return socket;
};
