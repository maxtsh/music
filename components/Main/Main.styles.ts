import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;

  .topbar {
    display: flex;
    height: 50px;

    &-searchbar {
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      flex: 80%;
      border-radius: 20px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      background-color: var(--white);

      &-icon {
        color: var(--pm-text);
        font-size: 25px;
      }

      &-input {
        width: 100%;
        height: 30px;
        outline: none;
        border: none;
        font-size: 110%;
      }
    }

    &-theme {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 20%;

      &-title {
        color: var(--pm-text);
        font-size: 100%;
      }
    }
  }

  .collections {
    display: flex;
    justify-content: space-between;

    &-heading {
      display: flex;
      align-items: center;

      &-icon {
        font-size: 24px;
        margin-right: 0.5rem;
        color: var(--purple);
      }

      &-title {
        font-size: 150%;
        color: var(--pm-text);
      }
    }

    &-more {
      display: flex;
    }
  }
`;
