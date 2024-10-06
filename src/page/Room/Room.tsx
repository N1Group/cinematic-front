import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';
import { Input } from '../../components/Input';
import { Message } from '../../components/Message';
import { Header } from '../../components/Header';

const $RoomWrapper = styled.div({
	width: '100%',
	display: 'flex',
	height: '93.2%',
	justifyContent: 'space-between'
});

const $Video = styled.div({
	width: '100%',
	flex: '1',
	maxWidth: '70%',
	height: '100%',
	background: '#080808'
});

const $Chat = styled.div({
	width: '30%',
	padding: '8px 8px 0px 8px',
	flexDirection: 'column',
	display: 'flex',
	overflow: 'auto',
	height: '100%',
	background: '#171717'
});

const $InputContainer = styled.div({
	display: 'flex',
	position: 'sticky',
	marginTop: '10px',
	flexDirection: 'column',
	background: '#171717',
	paddingBottom: '8px',
	bottom: '0',
	justifyContent: 'flex-end'
});

const $MessageWrapper = styled.div({
	display: 'flex',
	flex: '1',
	flexDirection: 'column',
	gap: '10px'
});

export const Room = () => {
	const { id } = useParams();

	return (
		<div style={{ height: '100vh' }}>
			<Header />
			<$RoomWrapper>
				<$Video></$Video>
				<$Chat>
					<$MessageWrapper>
						<Message color='#FFA049' isSystemMessage name='Система' text='Добро пожаловать!' />
						<Message name='daniaaa1717' text='прнивет всем' avatar='/Icon (1).png' />
						<Message name='artem228' text='прнивет всем' avatar='/Icon (1).png' />
						<Message name='slavaMarloy' text='прнивет всем 🙌🙌🙌' avatar='/Icon (1).png' />
						<Message
							isMessageUser
							text={
								'История о том, как мы должны жить, - это история, посвященная избранным. Ут и масса людей. Аликвам в хендреритской урне. Пеллентеск сидит с Аметом сапиенсом фрингильей, маттисом лигулой-консулом, ультрарисом Морисом. Биография мецената Маттиса теллуса. Что будет в будущем году? Преддверие желудка или двенадцатиперстной кишки, не вызывает опасений в Европе. Хранитель пеллентеска, ни-ни-ни, в самом начале брожения находится в желудке. Пеллентеск - коммодо-лакус в "содалес содалес". Как быстро растут растения в диамантуме, так и быстро растут на месте. В конце концов, это время, когда растения становятся более удобными. '
							}
						/>
						<Message
							isMessageUser
							text={
								'История о том, как мы должны жить, - это история, посвященная избранным. Ут и масса людей. Аликвам в хендреритской урне. Пеллентеск сидит с Аметом сапиенсом фрингильей, маттисом лигулой-консулом, ультрарисом Морисом. Биография мецената Маттиса теллуса. Что будет в будущем году? Преддверие желудка или двенадцатиперстной кишки, не вызывает опасений в Европе. Хранитель пеллентеска, ни-ни-ни, в самом начале брожения находится в желудке. Пеллентеск - коммодо-лакус в "содалес содалес". Как быстро растут растения в диамантуме, так и быстро растут на месте. В конце концов, это время, когда растения становятся более удобными. '
							}
						/>
						<Message name='егор крид' text='прнивет всем 🤗🤗🤗' avatar='/Icon (1).png' />
					</$MessageWrapper>
					<$InputContainer>
						<Input width='100%' />
					</$InputContainer>
				</$Chat>
			</$RoomWrapper>
		</div>
	);
};
