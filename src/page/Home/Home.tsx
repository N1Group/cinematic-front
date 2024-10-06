import styled from '@emotion/styled';
import { RoomCard } from '../../components/RoomCard';
import { Header } from './components/Header';

const $RoomCardWrapper = styled.div({
  display: 'flex',
  gap: '10px',
  padding: '10px 20px',
  flexWrap: 'wrap',
});

export const Home = () => {
  return (
    <>
      <Header />
      <$RoomCardWrapper>
        {[...Array(14)].map((_, index) => (
          <RoomCard key={index} />
        ))}
      </$RoomCardWrapper>
    </>
  );
};
