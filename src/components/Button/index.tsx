import { FC, HTMLAttributes } from 'react';
import { Icon } from '../icon';
import { $Button } from './style';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  leftAndRight?: 'left' | 'right';
  height?: string;
}

export const Button: FC<ButtonProps> = ({ children, leftAndRight, height, ...props }) => {
  return (
    <$Button height={height} {...props}>
      {leftAndRight === 'left' && <Icon name='Plus' />}
      {children}
      {leftAndRight === 'right' && <Icon name='Plus' />}
    </$Button>
  );
};
