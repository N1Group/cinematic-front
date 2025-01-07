import { useGetAllRooms } from '@/services/rooms';
import { isNotEmptyArray } from '@/utils/isNotEmptyArray';
import { RoomCard } from './components/RoomCard';
import { useRoomSync } from './hooks/useRoomSync';
import { $RoomCards } from './style';

export const Home = () => {
  useRoomSync();
  const { data } = useGetAllRooms();

  return (
    <$RoomCards>{isNotEmptyArray(data) && data.map((room, index) => <RoomCard key={index} {...room} />)}</$RoomCards>
  );
};
