import styled from "styled-components";
import type { ContainerStyleProps, BarStyleProps } from "./Progress.types";

export const Container = styled.div<ContainerStyleProps>`
  pointer-events: none;
  opacity: ${(p) => (p.isF ? 0 : 1)};
  transition: ${(p) => p.tr};
`;

export const Bar = styled.div<BarStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 4px;
  background-color: var(--blue-1);
  margin-left: ${(p) => p.ml};
  transition: ${(p) => p.tr};
`;
