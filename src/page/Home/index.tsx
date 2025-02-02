import { useGetAllRooms } from '@/services/rooms';
import { isNotEmptyArray } from '@/utils/isNotEmptyArray';
import { useEffect } from 'react';
import { RoomCard } from './components/RoomCard';
import { useRoomListSync } from './hooks/useRoomListSync';
import { $RoomCards } from './style';

export const Home = () => {
  useRoomListSync();
  const { data } = useGetAllRooms();

  useEffect(() => {
    // refetch();
  }, []);

  return (
    <$RoomCards>{isNotEmptyArray(data) && data.map((room, index) => <RoomCard key={index} {...room} />)}</$RoomCards>
  );
};
