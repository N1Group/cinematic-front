import styled from '@emotion/styled';
import { Button } from './Button';
import { Text } from './Text';

const $RoomCard = styled.div({
  width: '348px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '140px',
  padding: '11px 14px',
  borderRadius: '8px',
  border: '1px solid #3a3a3a',
  background: '#1e1e1e',
});

const $RommInfo = styled.h2({
  display: 'flex',
  gap: '4px',
  flexDirection: 'column',
});

const $TextRoom = styled.h2({
  color: '#fff',
  fontWeight: '400',
  fontSize: '16px',
});

const $DescriptionRoom = styled.p({
  color: '#8f8f8f',
  fontSize: '14px',
  fontWeight: '400',
});

const $AvatarUserRoomWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const $AvatarUserRoomCount = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const $AvatarUserRoom = styled.div<{ left?: string; index?: number; opacity?: string }>(
  {
    border: '1px solid #3A3A3A',
    borderRadius: '8px',
    position: 'absolute',
    transform: 'translate(0px, 7px)',
    left: '0',
    width: '30px',
    height: '30px',
    background: 'url("/c1f2a18863a127d71251dd0740442806.jpg") no-repeat center center / 100%',
  },
  ({ left, index, opacity }) => ({
    left,
    opacity,
    zIndex: index,
  }),
);

const $AvatarUserRoomWrappers = styled.div<{ width?: string }>(
  {
    position: 'relative',
    height: '100%',
    display: 'flex',
  },
  ({ width }) => ({
    width,
  }),
);

function culculateLeft(index: number) {
  if (index === 0) {
    return;
  }
  return `${14 * index + 8}px`;
}

export const RoomCard = () => {
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
                  opacity={`${100 - index * 15}%`}
                  left={culculateLeft(index)}
                  index={arr.length - index}
                />
              );
            })}
          </$AvatarUserRoomWrappers>
          <Text type="p">5/5</Text>
        </$AvatarUserRoomCount>
        <Button height="42px">Подключиться</Button>
      </$AvatarUserRoomWrapper>
    </$RoomCard>
  );
};
