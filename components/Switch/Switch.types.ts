import { HTMLProps } from "react";

export interface IProps extends HTMLProps<HTMLInputElement> {
  onClick?: (e: any) => any;
}
