import { FC } from 'react';
import { $Button } from './style';

interface Props {
	children: React.ReactNode;
	isPlay?: boolean;
	height?: string;
}

export const Button: FC<Props> = ({ children, isPlay, height }) => {
	return (
		<$Button height={height}>
			{isPlay ? <img src='/LeftIcon.png' alt='' /> : null}
			<p>{children}</p>
		</$Button>
	);
};
