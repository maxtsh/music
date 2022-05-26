import styled from "styled-components";
import type { ContainerStyleProps } from "./Container.types";

export const Container = styled.div<ContainerStyleProps>`
  pointer-events: none;
  opacity: ${(p) => (p.isF ? 0 : 1)};
  transition: ${(p) => p.tr};
`;
