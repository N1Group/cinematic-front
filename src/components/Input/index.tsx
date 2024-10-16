import { FC, HTMLAttributes } from 'react';
import { Icon } from '../icon';
import { $Description, $InputTextWrapper, $InputWrapper, $Label, $input } from './style';
interface Props extends HTMLAttributes<HTMLInputElement>  {
  iconLeft?: string;
  label?: string;
  width: string;
  description?: string;
  iconRight?: string;
  height?: string;
}

export const Input: FC<Props> = ({ iconLeft, iconRight, description, label, width, height }) => {
  return (
    <$InputTextWrapper>
      {label && <$Label>{label}</$Label>}
      <$InputWrapper width={width} height={height}>
        {iconLeft && <Icon name='Plus' />}
        <$input placeholder='Placeholder' />
      </$InputWrapper>
      {description && <$Description>{description}</$Description>}
      {iconRight && <Icon name='Plus' />}
    </$InputTextWrapper>
  );
};
