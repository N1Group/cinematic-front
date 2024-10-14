import styled from '@emotion/styled';

import { AvatarProps } from './types';

export const $Avatar = styled.div<AvatarProps>(
  {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ({ url, ischat, isSystemMessage, size }) => ({
    borderRadius: `${ischat ? '50%' : '8px'}`,
    width: `${size}px`,
    height: `${size}px`,
    border: `1px solid ${!ischat ? '#3A3A3A' : isSystemMessage ? '#2F2E4E' : '#373737'}`,
    background: `url(${url}) no-repeat center center / cover`,
  }),
);
