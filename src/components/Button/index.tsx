import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { Icon, IconNames } from '../icon';
import { $Button } from './style';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'onClick'> {
  iconLeft?: IconNames;
  iconRight?: IconNames;
  style?: 'dark' | 'light';
  centered?: boolean;
  onClick?: () => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  iconLeft,
  iconRight,
  style = 'dark',
  type = 'button',
  centered = true,
  ...props
}) => {
  return (
    <$Button buttonStyle={style} centered={centered} type={type} {...props}>
      {iconLeft && <Icon name={iconLeft} />}
      {children}
      {iconRight && <Icon name={iconRight} />}
    </$Button>
  );
};
