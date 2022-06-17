import type { ReleaseItemType } from "types/ReleaseTypes";

export interface ContainerProps {
  active: boolean;
}

export interface IProps {
  data: { id: number; src: string; name: string; desc: string };
  active: boolean;
}
