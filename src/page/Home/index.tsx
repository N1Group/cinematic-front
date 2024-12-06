import { Room } from '@/types/Room';
import { useLoaderData } from 'react-router';
import type { Route } from './+types';
import { RoomCard } from './components/RoomCard';
import { useGetAllRooms } from './service';
import { $RoomCardWrapper } from './style';

export const loader = () => {
  const { data } = useGetAllRooms();
  if (!data) return [] as Room[];

  return [];
};

export const HydrateFallback = () => {
  return <p>Loading...</p>;
};

export default function Home() {
  const data = useLoaderData<Route.ComponentProps['loaderData']>();

  return (
    <$RoomCardWrapper>
      {data.map((_, index) => (
        <RoomCard key={index} index={index} />
      ))}
    </$RoomCardWrapper>
  );
}
