import styled from '@emotion/styled';

export const $InputTextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const $InputWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#222',
  borderRadius: '8px',
  border: '1px solid #3a3a3a',
  padding: '14px',
});

export const $input = styled.input({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: '#fff',
  width: '100%',
  height: '100%',
});
