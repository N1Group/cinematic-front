import { Room } from '@/types/Room';

export type GetAllRoomsRequest = Room[];
export type RoomActionRequest = {
  roomId: string;
  userId: string;
};
