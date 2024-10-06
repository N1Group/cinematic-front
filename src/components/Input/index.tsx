import { FC } from 'react';
import { $Input } from './style';

interface Props {
	width?: string;
}

export const Input: FC<Props> = ({ width }) => {
	return <$Input width={width} size={14} placeholder='Placeholder Text' />;
};
