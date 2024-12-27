import { ClientToServerEvents, ServerToClientEvents } from '@/types/Socket';
import { Context, createContext, FC, PropsWithChildren, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export const SocketContext = createContext<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null) as Context<
  Socket<ServerToClientEvents, ClientToServerEvents>
>;

export const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const preloadedSocket = io(HOST, {
    withCredentials: true,
  });
  const socketRef = useRef<Socket>(preloadedSocket);

  return <SocketContext.Provider value={socketRef.current}>{children}</SocketContext.Provider>;
};
