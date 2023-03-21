import { createGlobalStyle } from "styled-components";

export const themeVars = {
  black: "#000",
  white: "#fff",
  primary: "#ffa0fa",
  padded: "1440px",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    transition: all 0.50s linear;
  }
`;
