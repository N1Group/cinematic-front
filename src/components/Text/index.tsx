import { FC } from 'react';
import { $Text } from './style';
import { TextProps } from './types';



export const Text: FC<TextProps> = ({ children, type, size }) => {
  return (
    <$Text size={size} TextType={type}>
      {children}
    </$Text>
  );
};
