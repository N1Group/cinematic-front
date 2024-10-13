import { FC } from 'react';
import { $Button } from './style';
import { Icon } from '../icon';

interface Props {
	children: React.ReactNode;
	LeftAndRight?: 'left' | 'right';
	height?: string;
}

export const Button: FC<Props> = ({ children, LeftAndRight, height }) => {
	return (
		<$Button height={height}>
			{LeftAndRight === 'left' && <Icon name='Plus' />}
			{children}
			{LeftAndRight === 'right' && <Icon name='Plus' />}
		</$Button>
	);
};
