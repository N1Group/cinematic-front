import { ClientToServerEvents, ServerToClientEvents } from '@/types/Socket';
import { createContext, FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { io, Socket } from 'socket.io-client';

type ContextOptions = {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
  setNamespace: (namespace: string) => void;
  setQuery: (query: Record<string, string>) => void;
};

export const SocketContext = createContext<ContextOptions | null>(null);

export const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const [namespace, setNamespace] = useState<string>('rooms');
  const [query, setQuery] = useState<Record<string, string>>({});
  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>();
  // console.log(query, socket?._opts.query);

  useEffect(() => {
    if (socket) {
      socket.disconnect();
    }

    // Создаем новый сокет при изменении namespace или query
    const newSocket = io(`${HOST}${namespace}`, {
      withCredentials: true,
      autoConnect: false,
      transports: ['websocket'],
    });

    newSocket.io.opts.query = { ...query };

    newSocket.connect();

    newSocket.on('connect', () => console.log(`Connected to ${namespace}`));
    newSocket.on('disconnect', () => console.log(`Disconnected from ${namespace}`));

    // Устанавливаем новый сокет
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [namespace, query]);

  const contextValue = useMemo(
    () => ({
      socket,
      setNamespace,
      setQuery,
    }),
    [socket],
  );

  // @ts-ignore
  return <SocketContext.Provider value={contextValue}>{children}</SocketContext.Provider>;
};
