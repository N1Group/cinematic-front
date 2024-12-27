import { io, Socket } from 'socket.io-client';
export const socketClient: Socket = io(HOST, {
  withCredentials: true,
  // transports: ['websockets'],
});
