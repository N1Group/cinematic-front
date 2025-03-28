import styled from '@emotion/styled';
import { ButtonProps } from '.';

interface $ButtonProps extends Pick<ButtonProps, 'centered'> {
  buttonStyle?: 'dark' | 'light';
}

export const $Button = styled.button<$ButtonProps>(
  ({ centered }) => ({
    padding: '0 10px',
    borderRadius: '8px',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: centered ? 'center' : 'space-between',
    display: 'flex',
    gap: '10px',
    height: 46,
    transition: 'all 0.3s ease',
    border: '1px solid transparent',
  }),
  ({ buttonStyle }) =>
    buttonStyle === 'dark'
      ? {
          background: '#222',
          color: '#FFF',
          borderColor: '#3A3A3A',

          '&:hover': {
            borderColor: '#272727',
            background: '#1A1A1A',
          },

          '&:disabled': {
            borderColor: '#272727',
            background: '#1A1A1A',
            color: '#5F5F5F',
            cursor: 'not-allowed',
          },
        }
      : {
          background: '#FFF',
          color: '#222',
          borderColor: '##D2D2D2',

          '&:hover': {
            borderColor: '#FFF',
            background: '#D7D7D7',
          },

          '&:disabled': {
            borderColor: '#D2D2D2',
            background: '#FFF',
            color: '#999999',
            cursor: 'not-allowed',
          },
        },
);
