import { FC, SVGAttributes } from 'react';
import * as icons from './icons';

export type IconNames = keyof typeof icons;

interface IconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  color?: string;
  size?: number | string;
}

export const Icon: FC<IconProps> = ({ name, color = 'currentColor', size = 24, ...props }) => {
  const Icons = { render: icons[name] as FC<SVGAttributes<SVGElement>> };

  return <Icons.render color={color} width={size} height={size} {...props} />;
};
