import { FC } from 'react';
import { $Text } from './style';

interface Props {
	children: React.ReactNode;
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	size?: number;
}

export const Text: FC<Props> = ({ children, type, size }) => {
	return (
		<$Text size={size} TextType={type}>
			{children}
		</$Text>
	);
};
