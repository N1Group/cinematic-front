import { forwardRef, InputHTMLAttributes } from 'react';
import { Icon, IconNames } from '../icon';
import { Text } from '../Text';
import { $input, $InputTextWrapper, $InputWrapper } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  iconLeft?: IconNames;
  iconRight?: IconNames;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, description, iconLeft, iconRight, ...props }, ref) => {
    return (
      <$InputTextWrapper>
        {label && <Text size='body2'>{label}</Text>}
        <$InputWrapper>
          {iconLeft && <Icon name={iconLeft} />}
          <$input className='text-body2' ref={ref} {...props} />
          {iconRight && <Icon name={iconRight} />}
        </$InputWrapper>
        {description && <Text size='body2'>{description}</Text>}
      </$InputTextWrapper>
    );
  },
);
