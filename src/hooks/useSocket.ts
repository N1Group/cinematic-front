import { SocketContext } from '@/providers/SocketProvider';
import { ServerToClientEvents } from '@/types/Socket';
import { useContext, useEffect } from 'react';

export const useSocket = <E extends keyof ServerToClientEvents>({
  name,
  namespace,
  enabled = true,
  query,
  onMessage,
}: {
  name?: E;
  namespace?: string;
  enabled?: boolean;
  query?: Record<string, string>;
  onMessage?: (data: ServerToClientEvents[E]) => void;
}) => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }

  const { socket, setNamespace, setQuery } = context;

  useEffect(() => {
    if (namespace) setNamespace(namespace);
  }, [namespace]);

  useEffect(() => {
    if (query) setQuery(query);
  }, [query]);

  useEffect(() => {
    if (!socket || !name || !onMessage || !enabled) return;

    socket.on(name, onMessage as any);

    return () => {
      socket.off(name, onMessage as any);
    };
  }, [socket, name, onMessage, enabled]);

  return { socket };
};
