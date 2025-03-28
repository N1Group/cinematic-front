import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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
  height: '100%',
  background: '#080808',
});

export const $Chat = styled(motion.div)({
  minWidth: 300,
  padding: '8px 8px 0px 8px',
  flexDirection: 'column',
  display: 'flex',
  height: '100%',
  background: '#171717',
  position: 'relative',
});

export const $ChatResize = styled(motion.div)({
  position: 'absolute',
  left: 0,
  top: 0,
  width: 50,
  height: '100%',
  cursor: 'w-resize',
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
  paddingRight: 12,
  gap: '10px',
});
