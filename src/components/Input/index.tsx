import { FC, HTMLAttributes } from 'react';
import { Icon } from '../icon';
import { $Description, $InputTextWrapper, $InputWrapper, $Label, $input } from './style';
interface Props extends HTMLAttributes<HTMLInputElement> {
  iconRightText?: 'Avatar' | 'Plus' | 'AvatarSystem';
  label?: string;
  width: string;
  description?: string;
  iconLeftText?: 'Avatar' | 'Plus' | 'AvatarSystem';
  height?: string;
}

export const Input: FC<Props> = ({ iconLeftText, iconRightText, description, label, width, height }) => {
  return (
    <$InputTextWrapper>
      {label && <$Label>{label}</$Label>}
      <$InputWrapper width={width} height={height}>
        {iconLeftText && <Icon name={iconLeftText} />}
        <$input placeholder='Placeholder' />
        {iconRightText && <Icon name={iconRightText} />}
      </$InputWrapper>
      {description && <$Description>{description}</$Description>}
    </$InputTextWrapper>
  );
};
