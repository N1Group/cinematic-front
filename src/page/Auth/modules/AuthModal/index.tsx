import { Text } from '@/components/Text';
import { FC, PropsWithChildren } from 'react';
import { $Content, $Header, $Modal } from './style';

type AuthModalProps = {
  title?: string;
  description?: string;
};

export const AuthModal: FC<PropsWithChildren<AuthModalProps>> = ({ title, description, children }) => {
  return (
    <$Modal>
      {(title || description) && (
        <$Header>
          <Text size='h2'>{title}</Text>
          <Text size='h6' color='#787878'>
            {description}
          </Text>
        </$Header>
      )}
      <$Content>{children}</$Content>
    </$Modal>
  );
};
