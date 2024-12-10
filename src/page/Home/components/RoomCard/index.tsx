import { useUserStore } from '@/stores/user';
import { Room } from '@/types/Room';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
import { useJoinRoom } from '../../service';
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

export const RoomCard: FC<RoomCardProps> = ({ name, id, members, nowPlaying }) => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const { mutateAsync: joinRoom } = useJoinRoom();

  const onJoinRoom = async () => {
    await joinRoom({ roomId: id, userId: user!.id });
    navigate(`/room/${id}`);
  };

  if (!user) return;

  return (
    <$RoomCard>
      <$RommInfo>
        <$TextRoom>Комната {name}</$TextRoom>
        <$DescriptionRoom>Сейчас играет: {nowPlaying}</$DescriptionRoom>
      </$RommInfo>
      <$AvatarUserRoomWrapper>
        <$AvatarUserRoomCount>
          <$AvatarUserRoomWrappers>
            {members?.map((_, index, arr) => {
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
          <Text size='body2'>{`${members?.length || 0} / 5`}</Text>
        </$AvatarUserRoomCount>
        <Button onClick={onJoinRoom}>Подключиться</Button>
      </$AvatarUserRoomWrapper>
    </$RoomCard>
  );
};
