import { ClientToServerEvents, ServerToClientEvents } from '@/types/Socket';
import { io, ManagerOptions, Socket, SocketOptions } from 'socket.io-client';
type SocketClient = (
  namespace?: string,
  // TODO: maybe remove options
  options?: Partial<ManagerOptions & SocketOptions>,
) => Socket<ServerToClientEvents, ClientToServerEvents>;

// TODO!: fix disconnect between namespaces (maybe just remove namespaces for rooms & chat)
export const socketClient: SocketClient = (namespace, options) =>
  io(`${HOST}${namespace ?? ''}`, {
    withCredentials: true,
    ...options,
  });
