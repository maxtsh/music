import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;

  // hidden default checkbox
  input[type="checkbox"] {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  // background
  label {
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
    background-color: var(--gray-3);
    /* border: 1px solid #ededed; */
    border-radius: 100px;
    cursor: pointer;
    transition: 0.5;

    // circle
    &::after {
      content: "";
      position: absolute;
      width: 17px;
      height: 17px;
      top: 6%;
      left: 5%;
      border-radius: 50%;
      background-color: var(--gray-2);
      transition: 0.3s;
    }

    // effect
    &:active {
      &::after {
        width: 90%;
      }
    }
  }

  // circle moviment
  input:checked + label:after {
    left: calc(100% - 5%);
    transform: translateX(-100%);
    background-color: var(--light-green);
  }

  // checked
  input:checked + label {
    background-color: var(--gray-3);
  }
`;
