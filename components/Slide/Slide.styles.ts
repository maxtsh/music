import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0rem 0.5rem;
  height: 250px;

  .image {
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }

  .intro {
    position: absolute;
    padding: 1rem;
    left: 30px;
    bottom: 10px;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.4);

    &-head {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;

      &-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
        margin-right: 0.5rem;
      }

      &-title {
        color: var(--white);
      }
    }

    &-body {
      margin-bottom: 0.5rem;

      &-title {
        color: var(--white);
        font-size: 150%;
        font-weight: 900;
      }
    }

    &-foot {
      &-text {
        color: var(--white);
      }
    }
  }
`;
