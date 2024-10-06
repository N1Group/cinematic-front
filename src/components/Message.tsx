import styled from '@emotion/styled';

const $Message = styled.div<{ width?: string; opacity?: string }>(
  {
    cursor: 'pointer',
    display: 'flex',
    maxWidth: '320px',
    width: '100%',
    alignItems: 'flex-end',
    gap: '10px',
  },
  ({ width, opacity }) => ({
    width,
    opacity,
  }),
);

const $MessageAvatar = styled.div<{ background?: string; border?: string; img?: string }>(
  {
    width: '32px',
    height: '32px',
    position: 'relative',
    background: '#a14444',
    borderRadius: '50%',
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
  ({ background, border, img }) => ({
    background,
    border,
  }),
);

const $MessageContent = styled.div<{ width?: string; opacity?: string }>(
  {
    padding: '8px',
    background: '#1F1F1F',
    minHeight: '46px',
    flex: '1',
    borderRadius: '8px',
  },
  ({ width, opacity }) => ({
    width,
    opacity,
  }),
);

const $MessageNameWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

const $MessageName = styled.h2({
  color: '#fff',
  fontSize: '15px',
});

const $MessageText = styled.p<{ color?: '#FFA049' | '#FF4949' }>(
  {
    color: '#fff',
    fontSize: '14px',
    marginTop: '2px',
  },
  ({ color }) => ({
    color,
  }),
);

const $MessageSystem = styled.p({
  color: '#fff',
  background: '#2589FF',
  borderRadius: '2px',
  padding: '0 4px',
  fontSize: '14px',
});

export const Message = () => {
  return (
    <$Message>
      <$MessageAvatar background="#3F3D67" border="1px solid #2F2E4E" img="/Icon.png" />
      <$MessageContent>
        <$MessageNameWrapper>
          <$MessageName>Не с земли</$MessageName>
          <$MessageSystem>Система</$MessageSystem>
        </$MessageNameWrapper>
        <$MessageText color="#FFA049">Пользователь подключился к каналу</$MessageText>
      </$MessageContent>
    </$Message>
  );
};
