import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: var(--white);
  display: flex;
  flex-direction: column;

  .user {
    width: 100%;
    flex: 5%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    &-info {
      display: flex;
      flex: 90%;

      &-avatar {
        margin-right: 1rem;

        &-img {
          border-radius: 50%;
        }
      }

      &-texts {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-name {
          color: var(--pm-text);
        }

        &-role {
          color: var(--gray-2);
        }
      }
    }

    &-menu {
      display: flex;
      align-items: center;
      flex: 10%;

      &-icon {
        cursor: pointer;
        padding: 0.5rem;
        font-size: 40px;
        border-radius: 50%;
        color: var(--pm-text);
        background-color: var(--gray-1);
      }
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: var(--gray-3);
  }

  .player {
    display: flex;
    flex-direction: column;
    flex: 95%;
    padding: 1rem;

    &-head {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &-main {
        display: flex;
        align-items: center;

        &-icon {
          font-size: 20px;
          color: var(--purple);
          margin-right: 1rem;
        }

        &-title {
          font-size: 120%;
          font-weight: 700;
          color: var(--pm-text);
        }
      }
    }

    &-cover {
      margin-top: 2rem;

      &-img {
        border-radius: 8px;
      }
    }
  }
`;
