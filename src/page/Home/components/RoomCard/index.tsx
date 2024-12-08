import { Room } from '@/types/Room';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Text';
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
import { RoomCardProps } from './types';
import { culculateLeft } from './utils/calculateLeft';

type RoomCardProps = Room;

export const RoomCard: FC<RoomCardProps> = ({ name, id, members, nowPlaying }) => {
  const navigate = useNavigate();

  return (
    <$RoomCard>
      <$RommInfo>
        <$TextRoom>Комната {name}</$TextRoom>
        <$DescriptionRoom>Сейчас играет: {nowPlaying}</$DescriptionRoom>
      </$RommInfo>
      <$AvatarUserRoomWrapper>
        <$AvatarUserRoomCount>
          <$AvatarUserRoomWrappers width={`${37 + 5 * 13}px`}>
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
          <Text size='body2'>{members?.length || 0} / 5</Text>
        </$AvatarUserRoomCount>
        <Button onClick={() => navigate(`/room/${id}`)}>Подключиться</Button>
      </$AvatarUserRoomWrapper>
    </$RoomCard>
  );
};
