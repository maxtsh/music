import styled from "styled-components";
import { ScrollableTrack } from "styles/Global";
import { Responsive } from "styles/Mixins";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: var(--gray-1);

  .sidebar {
    display: flex;
    flex: 15%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    ${ScrollableTrack}
  }

  .main {
    display: flex;
    flex: 55%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    ${ScrollableTrack}
  }

  .player {
    display: flex;
    flex: 30%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    ${ScrollableTrack}
  }

  ${Responsive.tablet.standard`
    flex-direction: column;
    height: auto;

    .sidebar {
      flex:1;
    }
  
    .main {
      flex:1;
    }
  
    .player {
      flex:1;
    }
  `}
`;
