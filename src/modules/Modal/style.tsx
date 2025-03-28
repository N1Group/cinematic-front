import styled from '@emotion/styled';

export const $Modal = styled.div({
  display: 'flex',
  width: '418px',
  padding: '24px',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 24,
  borderRadius: '16px',
  border: '1px solid #3a3a3a',
  background: '#1e1e1e',
  boxShadow: '0px -14px 32.6px 0px rgba(36, 36, 36, 0.7)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const $Header = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: 8,
});
