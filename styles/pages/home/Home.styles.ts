import styled from "styled-components";
import { Responsive } from "../../Mixins";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--gray-1);

  .main {
    display: flex;
    flex: 1;

    &-left {
      margin: 1rem;
      padding: 2rem;
      flex: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      &-intro {
        display: flex;
        flex-direction: column;

        &-title {
          margin: 2rem 0rem;
          font-size: 500%;
          font-weight: 900;
          color: #000;
        }

        &-description {
          margin: 2rem 0rem;
          font-size: 120%;
          font-weight: 500;
          color: #000;
        }
      }

      &-btns {
        display: flex;

        &-now {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0rem 1rem;
          height: 50px;
          border-radius: 8px;
          color: #fff;
          margin-right: 1rem;
          background-color: #000;
          text-decoration: none;

          &-icon {
            font-size: 20px;
            margin-right: 0.5rem;
          }
        }

        &-hire {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0rem 1rem;
          height: 50px;
          border-radius: 8px;
          color: #000;
          border: 1px solid #000;
          text-decoration: none;
        }
      }
    }

    &-right {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 40%;
      background-image: url("/assets/disco-01.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      &-art {
        z-index: 3;
        position: relative;
        width: 400px;
        height: 600px;
        background-image: url("/assets/disco-01.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-color: var(--purple-2);
        border-radius: 8px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
          rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

        &-title {
          position: absolute;
          bottom: 100px;
          left: 50%;
          width: 100%;
          text-align: center;
          transform: translate(-50%, 0) rotate(-15deg);
          font-size: 250%;
          font-weight: 700;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.6);
        }

        &-subtitle {
          position: absolute;
          bottom: 50px;
          left: 50%;
          width: 100%;
          text-align: center;
          transform: translate(-50%, 0) rotate(-15deg);
          color: #fff;
        }
      }

      &-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  ${Responsive.tablet.standard`
    .main{
      flex-direction: column;
    }

  `}
`;
