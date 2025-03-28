import { Room } from '@/types/Room';
import { Message } from '../Message';

export type GetAllRoomsRequest = Room[];
export type RoomActionRequest = {
  roomId: string;
  userId: string;
};

export type GetAllRoomMessagesRequest = Message[];
