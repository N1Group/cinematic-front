import styled from '@emotion/styled';
import { TextProps } from '.';

export const $Text = styled.p<TextProps>(({ color }) => ({
  color: color || '#fff',
}));
