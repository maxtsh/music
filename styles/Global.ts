import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box ;
}

html,body{
  font-size:16px ;
  font-family: 'Roboto', sans-serif !important;
  margin: 0;
  padding:0;
}

h1, h2, h3, h4, h5, h6, p, span{
  margin: 0;
}
`;

export default GlobalStyles;
