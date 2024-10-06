import { Button } from '../Button';
import { Text } from '../Text';

import { $AvatarUserRoom, $AvatarUserRoomCount, $AvatarUserRoomWrappers, $AvatarUserRoomWrapper, $DescriptionRoom, $RommInfo, $RoomCard, $TextRoom } from './style';

function culculateLeft(index: number) {
	if (index === 0) {
		return;
	}
	return `${14 * index + 8}px`;
}

export const RoomCard = () => {
	return (
		<$RoomCard>
			<$RommInfo>
				<$TextRoom>Комната 1</$TextRoom>
				<$DescriptionRoom>Сейчас играет: Фильм полицейский с рублевки</$DescriptionRoom>
			</$RommInfo>
			<$AvatarUserRoomWrapper>
				<$AvatarUserRoomCount>
					<$AvatarUserRoomWrappers width={`${37 + 5 * 13}px`}>
						{[...Array(5)].map((_, index, arr) => {
							return <$AvatarUserRoom key={index} opacity={`${100 - index * 15}%`} left={culculateLeft(index)} index={arr.length - index} />;
						})}
					</$AvatarUserRoomWrappers>
					<Text type='p'>5/5</Text>
				</$AvatarUserRoomCount>
				<Button height='42px'>Подключиться</Button>
			</$AvatarUserRoomWrapper>
		</$RoomCard>
	);
};
