import styled from "styled-components";
import { InputProps } from "./Audio.types";

export const Input = styled.input<InputProps>`
  position: relative;
  flex: 1;
  appearance: none;
  height: 4px;
  border-radius: 10px;
  background-color: var(--gray-2);
  outline: none;

  &::before {
    content: "";
    width: ${(p) => p.w};
    height: 4px;
    background: var(--bg-gradient-1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin: -2px 0 0 0;
    position: relative;
    background-color: var(--blue-1);
    z-index: 3;
  }

  &:active::-webkit-slider-thumb {
    transform: scale(1.2);
    background-color: var(--purple);
    z-index: 3;
  }
`;
