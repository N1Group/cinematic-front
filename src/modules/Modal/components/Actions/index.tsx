import { FC, PropsWithChildren } from 'react';
import { $ModalActions } from './style';

export const ModalActions: FC<PropsWithChildren> = ({ children }) => {
  return <$ModalActions>{children}</$ModalActions>;
};
