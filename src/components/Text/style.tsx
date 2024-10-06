import styled from '@emotion/styled';
import { FC } from 'react';

interface Props {
	TextType: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children: React.ReactNode;
	size?: number;
}

export const $Text: FC<Props> = ({ TextType, children, size }) => {
	const $Text = styled[TextType]<{ size?: number }>(
		{
			fontWeight: '500'
		},
		({ size }) => ({
			fontSize: size ? `${size}px` : '14px'
		})
	);
	return <$Text size={size}>{children}</$Text>;
};
