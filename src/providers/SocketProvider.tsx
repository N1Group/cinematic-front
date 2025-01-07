import { ClientToServerEvents, ServerToClientEvents } from '@/types/Socket';
import { createContext, FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { io, Socket } from 'socket.io-client';

type ContextOptions = {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | null;
  setNamespace: (namespace: string) => void;
  setQuery: (query: Record<string, string>) => void;
};

export const SocketContext = createContext<ContextOptions | null>(null);

export const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const [namespace, setNamespace] = useState<string>('rooms');
  const [query, setQuery] = useState<Record<string, string>>({});
  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null);

  useEffect(() => {
    // Создаем новый сокет при изменении namespace или query
    const newSocket = io(`${HOST}${namespace}`, {
      withCredentials: true,
      autoConnect: true,
      transports: ['websocket'],
      query,
    });

    newSocket.on('connect', () => console.log(`Connected to ${namespace}`));
    newSocket.on('disconnect', () => console.log(`Disconnected from ${namespace}`));

    // Устанавливаем новый сокет
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [namespace, JSON.stringify(query)]);

  const contextValue = useMemo(
    () => ({
      socket,
      setNamespace,
      setQuery,
    }),
    [socket],
  );

  return <SocketContext.Provider value={contextValue}>{children}</SocketContext.Provider>;
};
