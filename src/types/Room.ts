import { User } from './User';
import { UUID } from './UUID';

export type Room = {
  id: UUID;
  name: string;
  nowPlaying: string;
  members: User[];
};
