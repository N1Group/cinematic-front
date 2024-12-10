import { Room } from '@/types/Room';

export type GetAllRoomsRequest = Room[];
export type JoinRoomRequest = {
  roomId: string;
  userId: string;
};
