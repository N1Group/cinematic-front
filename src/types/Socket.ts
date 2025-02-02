import { Room } from './Room';
import { User } from './User';
import { UUID } from './UUID';

export interface ServerToClientEvents {
  'room/created': (room: Room) => void;
  'room/deleted': (id: UUID) => void;

  'room/joined': (user: User) => void;
  'room/leaved': (user: User) => void;
}

export interface ClientToServerEvents {
  'room/create': () => void;
  'room/join': (roomId: string) => void;
  'room/leave': (roomId: string) => void;
}
