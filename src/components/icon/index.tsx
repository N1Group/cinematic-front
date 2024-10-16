import { FC } from 'react';
import * as icons from './icons';
import { IconProps } from './types';



export const Icon: FC<IconProps> = ({ name }) => {
  const Icons = { render: icons[name] };

  return <Icons.render />;
};
