import styled from '@emotion/styled';

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
	height: '93.2vh',
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

export { $RoomWrapper, $Video, $Chat, $InputContainer, $MessageWrapper };
