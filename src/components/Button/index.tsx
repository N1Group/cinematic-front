import { FC } from 'react';
import { Icon } from '../icon';
import { $Button } from './style';
import { ButtonProps } from './types';



export const Button: FC<ButtonProps> = ({ children, leftAndRight, height, ...props }) => {
  return (
    <$Button height={height} {...props}>
      {leftAndRight === 'left' && <Icon name='Plus' />}
      {children}
      {leftAndRight === 'right' && <Icon name='Plus' />}
    </$Button>
  );
};
