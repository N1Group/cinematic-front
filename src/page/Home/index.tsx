import { RoomCard } from './components/RoomCard';
import { useGetAllRooms } from './service';
import { $RoomCardWrapper } from './style';

export const Home = () => {
  const { data } = useGetAllRooms();

  return <$RoomCardWrapper>{data?.map((room, index) => <RoomCard key={index} {...room} />)}</$RoomCardWrapper>;
};
