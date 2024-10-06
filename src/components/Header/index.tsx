import { Button } from '../Button';
import { Input } from '../Input';
import { UserInfo } from '../UserInfo';
import { $Header } from './style';
import { useLocation } from 'react-router-dom';
export const Header = () => {
	const { pathname } = useLocation();

	return (
		<$Header>
			{pathname === '/' ? (
				<Button height='42px' isPlay>
					Создать комнату
				</Button>
			) : (
				<Input />
			)}

			<UserInfo avatarUrl='/c1f2a18863a127d71251dd0740442806.jpg' userName='@daniaaa1717' />
		</$Header>
	);
};
