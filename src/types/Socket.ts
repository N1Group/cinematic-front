import { Message } from './Message';
import { Room } from './Room';
import { User } from './User';
import { UUID } from './UUID';

export interface ServerToClientEvents {
  'room/created': (room: Room) => void;
  'room/owned/created': (room: Room) => void;
  'room/deleted': (id: UUID) => void;

  'room/joined': (user: User) => void;
  'room/leaved': (user: User) => void;

  'room/chat/sended': (message: Message) => void;
}

export interface ClientToServerEvents {
  'room/create': () => void;
  'room/join': (roomId: string) => void;
  'room/leave': (roomId: string) => void;
  'room/chat/send': (message: string) => void;
}
