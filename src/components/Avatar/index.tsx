import { FC } from 'react';
import { $Avatar } from './style';
import { AvatarProps } from './types';
import { Icon } from '../icon';

export const Avatar: FC<Omit<AvatarProps, 'size'>> = ({ url, ischat, isSystemMessage }) => {
  return (
    <$Avatar size={ischat ? 28 : 36} isSystemMessage={isSystemMessage} ischat={ischat} url={url}>
      {url && !ischat && !url ? (
        <Icon name='Avatar' />
      ) : isSystemMessage && ischat ? (
        <Icon name='AvatarSystem' />
      ) : (
        ischat && !url && <Icon name='Avatar' />
      )}
    </$Avatar>
  );
};
