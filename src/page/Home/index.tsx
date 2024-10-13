import { RoomCard } from '../../components/RoomCard';
import { $RoomCardWrapper } from './style';

export const Home = () => {
	return (
		<$RoomCardWrapper>
			{[...Array(14)].map((_, index) => (
				<RoomCard key={index} />
			))}
		</$RoomCardWrapper>
	);
};
