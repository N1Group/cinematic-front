import { css } from '@emotion/react';
import styled from '@emotion/styled';

const $Input = styled.input(
  {
    width: '327px',
    padding: '14px',
    outline: 'none',
    height: '38px',
    fontSize: '14px',
    color: '#FFFFFF',
    borderRadius: '8px',
    position: 'relative',
    border: '1px solid #3a3a3a',
    background: '#222',
    '&::after': {
      content: '""',
      background: 'url("/Icon.png") no-repeat center center / 100%',
      position: 'absolute',
      top: '50%',
      width: '70%',
      height: '70%',
      transform: 'translate(-50%, -50%)',
      left: '50%',
    },
  },
  props => ({
    fontSize: props.size,
  }),
);

export const Input = () => {
  return <$Input size={14} placeholder="Placeholder Text" />;
};
