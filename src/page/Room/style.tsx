import styled from '@emotion/styled';

export const $RoomWrapper = styled.div({
  width: '100%',
  display: 'flex',
  overflow: 'hidden',
  height: '100%',
  justifyContent: 'space-between',
});

export const $Video = styled.div({
  width: '100%',
  flex: '1',
  maxWidth: '70%',
  height: '100%',
  background: '#080808',
});

export const $Chat = styled.div({
  width: '30%',
  padding: '8px 8px 0px 8px',
  flexDirection: 'column',
  display: 'flex',
  height: '100%',
  background: '#171717',
});

export const $InputContainer = styled.div({
  display: 'flex',
  position: 'sticky',
  marginTop: '10px',
  flexDirection: 'column',
  background: '#171717',
  paddingBottom: '8px',
  bottom: '0',
  justifyContent: 'flex-end',
});

export const $MessageWrapper = styled.div({
  display: 'flex',
  flex: '1',
  overflow: 'auto',
  flexDirection: 'column',
  gap: '10px',
});
