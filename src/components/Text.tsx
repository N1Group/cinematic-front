import { FC } from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  size?: number;
}

export const Text: FC<Props> = ({ children, type, size }) => {
  const TextType = type;

  const $Text = styled[TextType]<{ size?: number }>(
    {
      fontWeight: '500',
    },
    ({ size }) => ({
      fontSize: size ? `${size}px` : '14px',
    }),
  );

  return <$Text size={size}>{children}</$Text>;
};
