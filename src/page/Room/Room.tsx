import { useParams } from 'react-router-dom';
import { Header } from './components/Header';
import styled from '@emotion/styled';

const $RoomWrapper = styled.div({
  width: '100%',
  display: 'flex',
  height: '93.2%',
  justifyContent: 'space-between',
});

const $Video = styled.div({
  width: '100%',
  flex: '1',
  maxWidth: '70%',
  height: '100%',
  background: '#080808',
});

const $Chat = styled.div({
  width: '30%',
  overflow: 'auto',
  height: '100%',
  background: '#171717',
});

export const Room = () => {
  const { id } = useParams();

  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <$RoomWrapper>
        <$Video></$Video>
        <$Chat />
      </$RoomWrapper>
    </div>
  );
};
