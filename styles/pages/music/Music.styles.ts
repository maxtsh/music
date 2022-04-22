import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: var(--gray-1);

  .sidebar {
    display: flex;
    flex: 15%;
  }

  .main {
    display: flex;
    flex: 60%;
  }

  .player {
    display: flex;
    flex: 25%;
  }
`;
