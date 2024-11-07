import { FC, PropsWithChildren } from 'react';
import { $ModalContent } from './style';

export const ModalContent: FC<PropsWithChildren> = ({ children }) => {
  return <$ModalContent>{children}</$ModalContent>;
};
