import { FC, PropsWithChildren } from 'react';
import { $Text } from './style';

type TextSizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'footnote';

export type TextProps = {
  size?: TextSizes;
  color?: string;
};

export const Text: FC<PropsWithChildren<TextProps>> = ({ children, size = 'body1', color }) => {
  return (
    <$Text className={`text-${size}`} color={color}>
      {children}
    </$Text>
  );
};
