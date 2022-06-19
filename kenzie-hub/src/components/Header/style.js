import styled from "styled-components";
import { createTheme } from "@mui/material/styles";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 6.125rem;
    height: 1rem;
  }
  
`;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF577F",
    },
    secondary: {
      main: "#212529",
    },
  },
});
