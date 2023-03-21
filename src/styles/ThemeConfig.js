import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#111",
  toggleBorder: "#FFF",
  background: "#363537",
  primary: "#5cfe50",
};

export const darkTheme = {
  body: "#000",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
  primary: "red",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
`;
