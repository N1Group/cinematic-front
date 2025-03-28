import { useGetAllRooms } from '@/services/rooms';
import { isNotEmptyArray } from '@/utils/isNotEmptyArray';
import { RoomCard } from './components/RoomCard';
import { $RoomCards } from './style';

export const Home = () => {
  const { data } = useGetAllRooms();
  // const user = useUserStore((state) => state.user);
  // const queryClient = useQueryClient();

  return (
    <$RoomCards>{isNotEmptyArray(data) && data.map((room, index) => <RoomCard key={index} {...room} />)}</$RoomCards>
  );
};
