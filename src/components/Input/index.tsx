import { FC, InputHTMLAttributes } from 'react';
import { Icon, IconNames } from '../icon';
import { Text } from '../Text';
import { $InputTextWrapper, $InputWrapper, $input } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  iconLeft?: IconNames;
  iconRight?: IconNames;
}

export const Input: FC<InputProps> = ({ label, description, iconLeft, iconRight, ...props }) => {
  return (
    <$InputTextWrapper>
      {label && <Text size='body2'>{label}</Text>}
      <$InputWrapper>
        {iconLeft && <Icon name={iconLeft} />}
        <$input className='text-body2' {...props} />
        {iconRight && <Icon name={iconRight} />}
      </$InputWrapper>
      {description && <Text size='body2'>{description}</Text>}
    </$InputTextWrapper>
  );
};
