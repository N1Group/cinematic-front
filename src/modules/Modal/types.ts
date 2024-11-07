import { FC, PropsWithChildren } from 'react';
import { ModalActions } from './components/Actions';
import { ModalContent } from './components/Content';

type ModalBaseProps = {
  title?: string;
  description?: string;
};

export interface ModalComponents {
  Content: typeof ModalContent;
  Actions: typeof ModalActions;
}

export type PopoverProps = FC<PropsWithChildren<ModalBaseProps>> & ModalComponents;
