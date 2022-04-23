import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
  --white: #ffffff;
  --gray-1: #F6F8F9;
  --gray-2:  #9BA6B0;
  --gray-3: rgb(231,235,239);
  --pm-text: #364045;
  --text-1: #7F8B9C;
  --purple: #6969FF;
  --text-light-1: rgb(173,181,194);
  --pink: #F36CC6;
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
`;

export default GlobalStyles;
