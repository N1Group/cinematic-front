import styled from '@emotion/styled';

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
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const $AvatarUserRoom = styled.div<{ left?: string; index?: number; opacity?: string }>(
  {
    border: '1px solid #3A3A3A',
    borderRadius: '8px',
    width: '30px',
    height: '30px',
    background: '#141414',
  },
  ({ left, index, opacity }) => ({
    padding: `-${left}`,
    opacity,
    zIndex: index,
  }),
);

const $AvatarUserRoomWrappers = styled.div({
  position: 'relative',
  height: '100%',
  display: 'flex',
});

export {
  $AvatarUserRoom,
  $AvatarUserRoomCount,
  $AvatarUserRoomWrapper,
  $AvatarUserRoomWrappers,
  $DescriptionRoom,
  $RommInfo,
  $RoomCard,
  $TextRoom,
};
