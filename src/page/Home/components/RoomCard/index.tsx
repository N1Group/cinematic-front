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

export const RoomCard: FC<RoomCardProps> = ({ index }) => {
  const navigate = useNavigate();

  return (
    <$RoomCard>
      <$RommInfo>
        <$TextRoom>Комната 1</$TextRoom>
        <$DescriptionRoom>Сейчас играет: Фильм полицейский с рублевки</$DescriptionRoom>
      </$RommInfo>
      <$AvatarUserRoomWrapper>
        <$AvatarUserRoomCount>
          <$AvatarUserRoomWrappers width={`${37 + 5 * 13}px`}>
            {[...Array(5)].map((_, index, arr) => {
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
          <Text size='body2'>5/5</Text>
        </$AvatarUserRoomCount>
        <Button onClick={() => navigate(`/room/${index}`)}>Подключиться</Button>
      </$AvatarUserRoomWrapper>
    </$RoomCard>
  );
};
