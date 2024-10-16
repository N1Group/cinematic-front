import { FC } from 'react';
import { $Button } from './style';
import { Icon } from '../icon';

interface Props {
	children: React.ReactNode;
	leftAndRight?: 'left' | 'right';
	height?: string;
}

export const Button: FC<Props> = ({ children, leftAndRight, height }) => {
	return (
		<$Button height={height}>
			{leftAndRight === 'left' && <Icon name='Plus' />}
			{children}
			{leftAndRight === 'right' && <Icon name='Plus' />}
		</$Button>
	);
};
