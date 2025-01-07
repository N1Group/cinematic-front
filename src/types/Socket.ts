import { Room } from './Room';
import { User } from './User';
import { UUID } from './UUID';

export interface ServerToClientEvents {
  'room/created': Room;
  'room/joined': User;
  'room/leaved': User;
  'room/deleted': UUID;
  error: () => Promise<void>;
}

export interface ClientToServerEvents {
  'room/create': () => void;
  'room/join': (roomId: string) => void;
  'room/leave': (roomId: string) => void;
}
