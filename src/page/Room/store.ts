import { Message } from '@/types/Message';
import { Room } from '@/types/Room';
import { createCustomStore } from '@/utils/createCustomStore';

type RoomStates = {
  selectedRoom?: Room;
};

type RoomActions = {
  setSelectedRoom: (room?: Room) => void;
  roomMessages: Message[];
  addMessage: (message: Message) => void;
  setMessages: (messages: Message[]) => void;
};

export const useRoomStore = createCustomStore({
  name: 'room',
})<RoomStates & RoomActions>((set) => ({
  selectedRoom: undefined,
  roomMessages: [],
  addMessage: (newMessage) =>
    set(({ roomMessages }) => ({
      roomMessages: [...roomMessages, newMessage],
    })),
  setMessages: (newMessages) => set({ roomMessages: newMessages }),
  setSelectedRoom: (room) => set({ selectedRoom: room }),
}));
