import { createGlobalStyle } from "styled-components";
import { createTheme } from "@mui/material/styles";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
    }

    `;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF577F",
    },
    secondary: {
      main: "#868e96",
    },
  },
});

export default GlobalStyle;
