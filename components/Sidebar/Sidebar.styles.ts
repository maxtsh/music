import styled, { keyframes } from "styled-components";

const gradientanim = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

export const Container = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white);

  .logo {
    display: flex;
    align-items: center;
    flex: 10%;

    &-icon {
      font-size: 50px;
      color: var(--purple);
      cursor: pointer;
    }

    &-title {
      font-size: 120%;
      font-weight: 900;
      color: var(--purple);
      cursor: pointer;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    flex: 35%;

    &-title {
      flex: 5%;
      color: var(--text-light-1);
    }

    &-list {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex: 95%;
      padding-left: 1rem;
      list-style: none;

      &-item {
        position: relative;
        display: flex;
        align-items: center;
        color: var(--text-1);
        height: 50px;
        padding: 0.25rem;

        &-icon {
          font-size: 20px;
          color: var(--text-1);
          margin-right: 1rem;
        }

        &-line {
          display: none;
          position: absolute;
          left: -2rem;
          width: 10px;
          height: 100%;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          background: var(--bg-gradient-1);
          background-size: var(--bg-size-1);
        }
      }

      &-item.active {
        border-radius: 4px;
        background-color: var(--gray-1);

        .menu-list-item-line {
          display: block;
        }
      }
    }
  }

  .playlist {
    display: flex;
    flex-direction: column;
    flex: 35%;

    &-title {
      flex: 5%;
      color: var(--text-light-1);
    }

    &-list {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex: 95%;
      padding-left: 1rem;
      list-style: none;

      &-item {
        display: flex;
        align-items: center;
        color: var(--text-1);
        height: 50px;
        padding: 0.25rem;

        &-icon {
          font-size: 20px;
          color: var(--text-1);
          margin-right: 1rem;
        }

        &-line {
          display: none;
          position: absolute;
          left: -2rem;
          width: 10px;
          height: 100%;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          background: linear-gradient(270deg, #3b92ff, #9540ff);
          background-size: 400% 400%;
        }
      }

      &-item.active {
        border-radius: 4px;
        background-color: var(--gray-1);

        .menu-list-item-line {
          display: block;
        }
      }
    }
  }

  .extra {
    position: relative;
    flex: 20%;

    .box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      top: 50%;
      right: -1rem;
      transform: translate(0, -50%);
      width: 80%;
      height: 100%;
      padding: 1rem;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background: linear-gradient(270deg, #3b92ff, #9540ff);
      background-size: 400% 400%;
      animation: ${gradientanim} 30s ease infinite;

      &-title {
        color: var(--white);
        font-weight: 400;
        margin-bottom: 0.5rem;
      }

      &-subtitle {
        color: var(--white);
        font-weight: 300;
        margin-bottom: 0.5rem;
      }

      &-link {
        color: var(--white);
        font-weight: 300;
      }
    }
  }
`;
