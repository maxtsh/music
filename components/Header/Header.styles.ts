import styled from "styled-components";
import { Responsive } from "../../styles/Mixins";

export const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 100px;
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
      padding-left: 1rem;
      flex: 25%;

      &-item {
        &-logo {
          display: flex;
          align-items: center;

          &-icon {
            font-size: 40px;
            color: #fff;
            cursor: pointer;
          }

          &-title {
            font-size: 110%;
            font-weight: 900;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }

    &-center {
      flex: 60%;

      &-item {
        margin-right: var(--sp-2);
      }
    }

    &-right {
      flex: 15%;
      padding-right: 1rem;
      justify-content: flex-end;

      &-item {
      }
    }

    ${Responsive.tablet.standard`
      display: none;
    `}
  }

  .mobile {
    display: none;
    height: 100px;

    &-left,
    &-right {
      display: flex;
      list-style: none;
      padding: 1rem;

      &-item {
        display: flex;
        align-items: center;
        cursor: pointer;

        &-icon {
          font-size: 25px;
          color: #fff;
          margin-right: var(--sp-1);
        }

        &-logo {
          display: flex;
          align-items: center;

          &-icon {
            font-size: 40px;
            color: #fff;
            cursor: pointer;
          }

          &-title {
            font-size: 110%;
            font-weight: 900;
            color: #fff;
            cursor: pointer;
          }
        }
      }
    }

    &-nav {
      display: flex;
      position: fixed;
      height: 100vh;
      width: 100%;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      clip-path: circle(100px at 90% -15%);
      transition: all 1s ease-out;
      pointer-events: none;
      background-color: #000;
      z-index: 5;

      &-close {
        position: absolute;
        top: 40px;
        right: 30px;
        cursor: pointer;

        &-icon {
          font-size: 20px;
          color: #fff;
        }
      }

      &.open {
        clip-path: circle(1500px at 90% -15%);
        pointer-events: all;
      }

      &-list {
        list-style: none;
        padding: 0;

        &-item {
          margin-bottom: 2rem;
          opacity: 0;

          &.fade {
            opacity: 1;
          }

          &-link {
            display: flex;
            align-items: center;
            font-size: 200%;
            font-weight: 700;
            color: #fff;
            text-decoration: none;

            &:hover {
              background-color: transparent;
            }
          }

          &-navicon {
            margin-right: 1rem;
          }

          &:nth-child(1) {
            transition: all 0.5s ease 0.2s;
          }

          &:nth-child(2) {
            transition: all 0.5s ease 0.2s;
          }

          &:nth-child(3) {
            transition: all 0.5s ease 0.4s;
          }

          &:nth-child(4) {
            transition: all 0.5s ease 0.6s;
          }

          &:nth-child(5) {
            transition: all 0.5s ease 0.8s;
          }

          &:nth-child(6) {
            transition: all 0.5s ease 1s;
          }
        }
      }
    }

    .menu {
      .right-menu {
        display: none;
      }
    }
  }

  ${Responsive.tablet.standard`
    .mobile{
      display: flex;
      flex: 1;
      justify-content: space-between;
    }
    `}
`;
