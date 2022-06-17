import { createGlobalStyle } from "styled-components";

import { css } from "styled-components";

export const ScrollableTrack = css`
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar:horizontal {
    height: 5px !important;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    display: none;
    background: #fdfdfd;
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    transition: display 1s ease-in-out;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    display: none;
    background: #b1b1b1;
    transition: display 1s ease-in-out;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b1b1b1;
  }

  :hover {
    /* Track */
    ::-webkit-scrollbar-track {
      display: block;
      background: #fdfdfd;
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      display: block;
      background: #b1b1b1;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #b1b1b1;
    }
  }
`;

const GlobalStyles = createGlobalStyle`

:root{
  --header-height: 100px;
  --white: #ffffff;
  --gray-1: #F6F8F9;
  --gray-2:  #9BA6B0;
  --gray-3: rgb(231,235,239);
  --pm-text: #364045;
  --text-1: #7F8B9C;
  --purple: #6969FF;
  --purple-2: #9540ff;
  --purple-3: #3D095C;
  --blue-1:#3b92ff;
  --text-light-1: rgb(173,181,194);
  --pink: #F36CC6;
  --bg-gradient-1: linear-gradient(270deg, var(--blue-1), var(--purple-2));
  --bg-size-1: 400% 400%;
  --sp-1: 0.5rem;
  --sp-2: 1rem;
  --sp-3: 1.5rem;
  --sp-4: 2rem;
}

*{
  box-sizing: border-box ;
}

html,body{
  font-size:16px ;
  font-family: 'Roboto', sans-serif !important;
  margin: 0;
  padding:0;
}

h1, h2, h3, h4, h5, h6, p, span, ol, ul{
  margin: 0;
}

.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100%;
  font-weight: 400;
  padding: 0rem 1rem;
  height: 50px;
  border-radius: 8px;
  color: #fff;
  background-color: #000;
  text-decoration: none;
  cursor: pointer;

  &-icon {
    font-size: 20px;
    margin-right: 0.5rem;
  }
}

`;

export default GlobalStyles;
