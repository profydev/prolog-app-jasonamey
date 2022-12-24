import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { color, Theme, space } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${normalize}
  
  body {
    font-family: Inter, Sans-Serif;
    color: ${color("gray", 900)};
  }

  a {
    color: ${color("primary", 700)};
  }

  ul, li { 
    padding: ${space(0)};
    margin: ${space(0)}
  }
`;
