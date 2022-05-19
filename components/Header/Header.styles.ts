import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 1rem;
  background-color: #000;

  .nav {
    flex: 1;
    display: flex;
    height: 100%;

    &-left,
    &-center,
    &-right {
      display: flex;
      list-style: none;
      padding: 0;

      &-item {
        display: flex;
        align-items: center;
        cursor: pointer;

        &-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        &-navicon {
          font-size: 20px;
          color: #fff;
          margin-right: var(--sp-1);
        }

        &-navtext {
          font-size: 100%;
          font-weight: 500;
          color: #fff;
        }
      }
    }

    &-left {
      flex: 25%;

      &-item {
        &-logo {
          display: flex;
          align-items: center;

          &-icon {
            font-size: 50px;
            color: #fff;
            cursor: pointer;
          }

          &-title {
            font-size: 120%;
            font-weight: 900;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }

    &-center {
      flex: 50%;

      &-item {
        margin-right: var(--sp-3);
      }
    }

    &-right {
      flex: 25%;
      justify-content: flex-end;

      &-item {
      }
    }
  }
`;
