import { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  leftAndRight?: 'left' | 'right';
  height?: string;
}