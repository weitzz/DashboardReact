import { createGlobalStyle } from "styled-components";
import { colors } from "./Colors";

import theme from ".";
type Theme = typeof theme;

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: ${theme.fonts.body};
  text-decoration: none; 
}

body{
  background: ${colors.neutral[600]};
  font-size: ${theme.fontSizes.h1};
  color: ${colors.neutral.white};
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 100px auto;
}
`;
export default GlobalStyle;
