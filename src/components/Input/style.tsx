import styled from '@emotion/styled';

const $InputTextWrapper = styled.div({
	display: 'flex',
	flexDirection: 'column',
	gap: '4px'
});

const $InputWrapper = styled.div<{ width?: string; height?: string }>(
	{
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		background: '#222',
		borderRadius: '8px',
		border: '1px solid #3a3a3a',
		padding: '14px'
	},
	({ width, height }) => ({
		width,
		height
	})
);

const $input = styled.input({
	background: 'transparent',
	border: 'none',
	outline: 'none',
	color: '#fff'
});

const $Label = styled.label({
	fontSize: '12px'
});

const $Description = styled.p({
	fontSize: '12px'
});

export { $InputTextWrapper, $InputWrapper, $input, $Label, $Description };
