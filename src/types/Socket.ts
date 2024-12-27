import { Room } from './Room';

export interface ServerToClientEvents {
  'room/create': Room;
  'room/delete': Room;
  error: () => Promise<void>;
}

export interface ClientToServerEvents {
  test: void;
}
