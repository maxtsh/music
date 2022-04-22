import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  .sidebar {
    flex: 15%;
  }

  .main {
    flex: 60%;
  }

  .player {
    flex: 25%;
  }
`;
