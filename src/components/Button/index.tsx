import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { Icon, IconNames } from '../icon';
import { $Button } from './style';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  iconLeft?: IconNames;
  iconRight?: IconNames;
  style?: 'dark' | 'light';
  centered?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  iconLeft,
  iconRight,
  style = 'dark',
  centered = true,
  ...props
}) => {
  return (
    <$Button buttonStyle={style} centered={centered} {...props}>
      {iconLeft && <Icon name={iconLeft} />}
      {children}
      {iconRight && <Icon name={iconRight} />}
    </$Button>
  );
};
