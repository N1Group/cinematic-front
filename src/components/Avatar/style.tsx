import styled from '@emotion/styled';

export const $Avatar = styled.div<{ url?: string }>(
	{
		border: '1px solid #3A3A3A',
		borderRadius: '8px',
		width: '36px',
		height: '36px',
		cursor: 'pointer'
	},
	({ url }) => ({
		background: `url(${url}) no-repeat center center / 100%`
	})
);
