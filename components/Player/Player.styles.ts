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
      position: relative;
      width: 100%;
      height: 400px;
      margin-top: 2rem;

      &-img {
        border-radius: 8px;
      }
    }

    &-body {
      display: flex;
      flex-direction: column;
      margin: 1rem 0rem;

      &-audio {
        display: none;
      }

      &-tools {
        display: flex;
        margin-top: 3rem;
        justify-content: space-between;

        button {
          cursor: pointer;
          border: 0;
          outline: 0;
        }

        &-next30 {
          background: transparent;

          &-icon {
            font-size: 25px;
            color: var(--gray-2);

            &:hover {
              color: var(--purple);
            }
          }
        }

        &-prev30 {
          background: transparent;

          &-icon {
            font-size: 25px;
            color: var(--gray-2);

            &:hover {
              color: var(--purple);
            }
          }
        }

        &-pp {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--bg-gradient-1);
          background-size: var(--bg-size-1);

          &-icon {
            font-size: 30px;
            color: var(--white);
          }
        }

        &-shuffle {
          background: transparent;

          &-icon {
            font-size: 25px;
            color: var(--gray-2);

            &:hover {
              color: var(--purple);
            }
          }
        }

        &-repeat {
          background: transparent;

          &-icon {
            font-size: 25px;
            color: var(--gray-2);

            &:hover {
              color: var(--purple);
            }
          }
        }
      }

      &-timeline {
        position: relative;
        display: flex;

        &-current {
          position: absolute;
          top: 30px;
          left: 0;
        }

        &-duration {
          position: absolute;
          top: 30px;
          right: 0;
        }
      }
    }
  }
`;
