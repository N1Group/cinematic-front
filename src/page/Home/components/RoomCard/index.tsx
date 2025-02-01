import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { useSocket } from '@/hooks/useSocket';
import { useRoomStore } from '@/page/Room/store';
import { useUserStore } from '@/stores/user';
import { Room } from '@/types/Room';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import {
  $AvatarUserRoom,
  $AvatarUserRoomCount,
  $AvatarUserRoomWrapper,
  $AvatarUserRoomWrappers,
  $DescriptionRoom,
  $RommInfo,
  $RoomCard,
  $TextRoom,
} from './style';
import { culculateLeft } from './utils/calculateLeft';

type RoomCardProps = Room;

export const RoomCard: FC<RoomCardProps> = (room) => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const setSelectedRoom = useRoomStore((state) => state.setSelectedRoom);
  const { socket } = useSocket({ namespace: 'rooms' });

  const onJoinRoom = async () => {
    socket.emit('room/join', room.id);
    setSelectedRoom(room);
    navigate(`/room/${room.id}`);
  };

  if (!user) return;

  return (
    <$RoomCard>
      <$RommInfo>
        <$TextRoom>Комната {room.name}</$TextRoom>
        <$DescriptionRoom>Сейчас играет: {room.nowPlaying}</$DescriptionRoom>
      </$RommInfo>
      <$AvatarUserRoomWrapper>
        <$AvatarUserRoomCount>
          <$AvatarUserRoomWrappers>
            {room.members?.map((_, index, arr) => {
              return (
                <$AvatarUserRoom
                  key={index}
                  opacity={`${100 - index * 15}%`}
                  left={culculateLeft(index)}
                  index={arr.length - index}
                />
              );
            })}
          </$AvatarUserRoomWrappers>
          <Text size='body2'>{`${room.members?.length || 0} / 5`}</Text>
        </$AvatarUserRoomCount>
        <Button onClick={onJoinRoom}>Подключиться</Button>
      </$AvatarUserRoomWrapper>
    </$RoomCard>
  );
};
