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
      align-items: center;
      cursor: pointer;

      &-icon {
        font-size: 24px;
        margin-left: 0.5rem;
        color: var(--purple);
      }

      &-title {
        font-size: 100%;
        color: var(--purple);
      }
    }
  }

  .trends {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;

    &-trend {
      display: flex;
      flex-direction: column;
      flex: 1;

      :not(:last-child) {
        margin-right: 0.5rem;
      }

      &-image {
        border-radius: 8px;
        cursor: pointer;
      }

      &-title {
        font-size: 90%;
        font-weight: 700;
        color: var(--pm-text);
        margin: 0.5rem 0 0.5rem 0;
        cursor: pointer;
      }

      &-cat {
        font-size: 90%;
        font-weight: 400;
        color: var(--text-light-1);
        cursor: pointer;
      }
    }
  }

  .trendlist {
    margin-top: 2rem;

    &-heading {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

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

    &-wrapper {
      display: flex;
      flex: 1;

      &-table {
        display: table;
        border-collapse: separate;
        border-spacing: 0px 15px;
        flex: 1;

        &-head {
          flex: 1;

          &-row {
            display: table-row;
            justify-content: space-between;
            flex: 1;

            &-th {
              text-align: left;
              display: table-cell;
              color: var(--pm-text);
            }
          }
        }

        &-body {
          &-row {
            &-td {
              padding: 0.5rem;

              &-info {
                display: flex;
                align-items: center;

                &-name {
                  color: var(--pm-text);
                  margin-left: 1rem;
                }

                &-img {
                  border-radius: 8px;
                }
              }
            }
          }

          &-row.active {
            padding: 0rem 0.5rem;
            background-color: var(--white);
            box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

            .trendlist-wrapper-table-body-row-td {
              :is(:last-of-type) {
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
              }

              :is(:first-of-type) {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
              }
            }
          }
        }

        &-foot {
        }
      }
    }
  }
`;
