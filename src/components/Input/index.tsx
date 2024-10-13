import { FC } from 'react';
import { Icon } from '../icon';
import { $Description, $InputTextWrapper, $InputWrapper, $Label, $input } from './style';
interface Props {
	iconLeft?: string;
	isLabel?: boolean;
	width: string;
	isDescription?: boolean;
	iconRight?: string;
	height?: string;
}

export const Input: FC<Props> = ({ iconLeft, iconRight, isDescription, isLabel, width, height }) => {
	return (
		<$InputTextWrapper>
			{isLabel && <$Label>Label</$Label>}
			<$InputWrapper width={width} height={height}>
				{iconLeft && <Icon name='Plus' />}
				<$input placeholder='Placeholder' />
			</$InputWrapper>
			{isDescription && <$Description>Description</$Description>}
			{iconRight && <Icon name='Plus' />}
		</$InputTextWrapper>
	);
};
