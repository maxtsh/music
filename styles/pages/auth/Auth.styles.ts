import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--sp-2);
  height: calc(100vh - var(--header-height));

  .title {
    text-align: center;
    position: relative;

    &-text {
      font-size: 500%;
      font-weight: 900;
      text-align: center;
    }

    &-sub {
      font-size: 130%;
      font-weight: 500;
      text-align: justify;
    }
  }

  .providers {
    &-item {
      &-button {
        margin: 1rem 0rem;
      }
    }
  }
`;
