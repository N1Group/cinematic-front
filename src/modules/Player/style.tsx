import styled from '@emotion/styled';
import { MediaPlayer, MediaProvider } from '@vidstack/react';

export const $MediaPlayer = styled(MediaPlayer)({
  height: '100%',
  flex: 0,
  aspectRatio: 'unset',
});

export const $MediaProvider = styled(MediaProvider)({
  ['iframe']: {
    height: '100% !important',
  },
});
