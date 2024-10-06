import styled from '@emotion/styled';
import { FC } from 'react';

const $Button = styled.button<{ width?: string; height?: string }>(
  {
    color: '#EDEDED',
    padding: '0 10px',
    borderRadius: '8px',
    cursor: 'pointer',
    alignItems: 'center',
    display: 'flex',
    gap: '10px',
    height: '37px',
    border: '1px solid #3A3A3A',
    background: '#222',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: '#1A1A1A',
      borderColor: '#272727',
    },
  },
  ({ width, height }) => ({
    width,
    height,
  }),
);

interface Props {
  children: React.ReactNode;
  isPlay?: boolean;
  height?: string;
}

export const Button: FC<Props> = ({ children, isPlay, height }) => {
  return (
    <$Button height={height}>
      {isPlay ? <img src="/LeftIcon.png" alt="" /> : null}
      <p>{children}</p>
    </$Button>
  );
};
