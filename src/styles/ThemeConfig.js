import { createGlobalStyle } from "styled-components";

export const themeVars = {
  black: "#000",
  white: "#fff",
  primary: "#00ff87",
  padded: "1440px",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    transition: all 0.50s linear;
  }

  .colored {
    color: ${({ theme }) => theme.primary}
  }
`;
