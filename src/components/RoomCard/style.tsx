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

export {
  $AvatarUserRoom,
  $AvatarUserRoomCount,
  $AvatarUserRoomWrappers,
  $AvatarUserRoomWrapper,
  $DescriptionRoom,
  $RommInfo,
  $RoomCard,
  $TextRoom,
};
