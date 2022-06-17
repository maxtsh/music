import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 1rem 0rem;
  height: 400px;

  .slide {
    clip-path: circle(0% at 0 50%);
  }

  .slide.active {
    clip-path: circle(150% at 0 50%);
    transition: clip-path 2s;
  }

  .navigation {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 2;
    border-radius: 8px;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.4);

    &-btn {
      width: 12px;
      height: 12px;
      margin: 10px;
      border-radius: 50%;
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.5);
      transition: background-color 0.3s ease-in-out;
    }

    &-btn.active {
      width: 15px;
      height: 15px;
      background-color: var(--blue-1);
      box-shadow: 0 0 2px rgba(255, 255, 255, 0.4);
    }
  }
`;
