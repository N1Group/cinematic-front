import { Text } from '@/components/Text';
import { ModalActions } from './components/Actions';
import { ModalContent } from './components/Content';
import { $Header, $Modal } from './style';
import { PopoverProps } from './types';

export const Modal: PopoverProps = ({ title, description, children }) => {
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
      {children}
    </$Modal>
  );
};

Modal.Actions = ModalActions;
Modal.Content = ModalContent;
