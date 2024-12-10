import { RoomCard } from './components/RoomCard';
import { useGetAllRooms } from './service';
import { $RoomCards } from './style';

export const Home = () => {
  const { data } = useGetAllRooms();

  return <$RoomCards>{data?.map((room, index) => <RoomCard key={index} {...room} />)}</$RoomCards>;
};
