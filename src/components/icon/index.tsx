import { FC, SVGAttributes } from 'react';
import * as icons from './icons';

export type IconNames = keyof typeof icons;

interface IconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  color?: string;
}

export const Icon: FC<IconProps> = ({ name, color = 'currentColor', ...props }) => {
  const Icons = { render: icons[name] as FC<SVGAttributes<SVGElement>> };

  return <Icons.render color={color} {...props} />;
};
