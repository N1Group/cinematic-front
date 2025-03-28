import { socketClient } from '@/constants/io';
import { Room } from '@/types/Room';
import { User } from '@/types/User';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useRoomStore } from '../store';

export const useRoomSync = () => {
  const { id } = useParams();
  const socket = socketClient();
  const addMessage = useRoomStore((state) => state.addMessage);
  const queryClient = useQueryClient();

  const filterExitedMember = (oldData: Room[], user: User) => {
    // console.log(oldData);
    console.log('user leaved', user.username);
    if (!oldData || oldData.length < 1) return [];

    const updatedRooms = oldData.slice().map((room) => {
      room.members = room.members.filter((member) => member.id === user?.id);
      return room;
    });
    console.log(updatedRooms);

    // return updatedRooms;
    return updatedRooms;
  };

  useEffect(() => {
    if (!id) return;
    const onMemberLeave = (user: User) => {
      queryClient.setQueryData(['rooms'], (oldData: Room[]) => filterExitedMember(oldData, user));
    };

    socket.emit('room/join', id);
    socket.on('room/chat/sended', addMessage);
    socket.on('room/joined', (user) => console.log('user joined', user.username));
    socket.on('room/leaved', onMemberLeave);

    return () => {
      window.history.pushState(null, '', window.location.href);
      socket.emit('room/leave', id);
      socket.off('room/chat/sended', addMessage);
      socket.off('room/joined');
      socket.off('room/leaved', onMemberLeave);
    };
  }, [id]);

  return socket;
};
