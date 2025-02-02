import { Message } from '@/types/Message';
import { Room } from '@/types/Room';
import { createCustomStore } from '@/utils/createCustomStore';

type RoomStates = {
  selectedRoom?: Room;
  backConfirmModal: boolean;
};

type RoomActions = {
  setSelectedRoom: (room?: Room) => void;
  roomMessages: Message[];
  addMessage: (message: Message) => void;
  setMessages: (messages: Message[]) => void;
  showBackConfirmModal: (show: boolean) => void;
};

export const useRoomStore = createCustomStore({
  name: 'room',
})<RoomStates & RoomActions>((set) => ({
  selectedRoom: undefined,
  backConfirmModal: false,
  roomMessages: [],
  addMessage: (newMessage) =>
    set(({ roomMessages }) => ({
      roomMessages: [...roomMessages, newMessage],
    })),
  setMessages: (newMessages) => set({ roomMessages: newMessages }),
  setSelectedRoom: (room) => set({ selectedRoom: room }),
  showBackConfirmModal: (value) => set({ backConfirmModal: value }),
}));
