import { FC, HTMLAttributes } from 'react';
import { Icon } from '../icon';
import { $Button } from './style';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  LeftAndRight?: 'left' | 'right';
  height?: string;
}

export const Button: FC<ButtonProps> = ({ children, LeftAndRight, height, ...props }) => {
  return (
    <$Button height={height} {...props}>
      {LeftAndRight === 'left' && <Icon name='Plus' />}
      {children}
      {LeftAndRight === 'right' && <Icon name='Plus' />}
    </$Button>
  );
};
