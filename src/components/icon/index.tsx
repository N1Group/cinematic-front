import { FC } from 'react';
import * as icons from './icons';

interface Props {
	name: keyof typeof icons;
}

export const Icon: FC<Props> = ({ name }) => {
	const Icons = { render: icons[name] };

	return <Icons.render />;
};
