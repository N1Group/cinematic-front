import { User } from './User';
import { UUID } from './UUID';

export type Message = {
  id: UUID;
  author: User;
  content: string;
  createdAt: string;
  updatedAt: string | null;

  // add later
  // reactions: Reaction[];
};
