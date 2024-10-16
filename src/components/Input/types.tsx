import { HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement>  {
  iconLeft?: string;
  label?: string;
  width: string;
  description?: string;
  iconRight?: string;
  height?: string;
}