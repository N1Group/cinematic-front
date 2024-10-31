import { FC } from 'react';
import * as icons from './icons';

export type IconNames = keyof typeof icons;

type IconProps = {
  name: IconNames;
};

export const Icon: FC<IconProps> = ({ name }) => {
  const Icons = { render: icons[name] };

  return <Icons.render />;
};
