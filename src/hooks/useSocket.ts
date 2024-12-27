import { SocketContext } from '@/providers/SocketProvider';
import { ServerToClientEvents } from '@/types/Socket';
import { useContext, useEffect } from 'react';

type EventName = keyof ServerToClientEvents;

type UseSocketProps<E extends EventName> = {
  name: E;
  onMessage: (data: ServerToClientEvents[E]) => void;
};

export const useSocket = <E extends EventName>({ name, onMessage }: UseSocketProps<E>) => {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on(name, onMessage as any);
    return () => {
      socket.off(name, onMessage as any);
    };
  }, []);

  return { socket };
};
