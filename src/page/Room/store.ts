import { Room } from '@/types/Room';
import { createCustomStore } from '@/utils/createCustomStore';

type RoomStates = {
  selectedRoom?: Room;
  backConfirmModal: boolean;
};

type RoomActions = {
  setSelectedRoom: (room?: Room) => void;
  showBackConfirmModal: (show: boolean) => void;
};

export const useRoomStore = createCustomStore({
  name: 'room',
})<RoomStates & RoomActions>((set) => ({
  selectedRoom: undefined,
  backConfirmModal: false,
  setSelectedRoom: (room) => set({ selectedRoom: room }),
  showBackConfirmModal: (value) => set({ backConfirmModal: value }),
}));
