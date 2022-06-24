import styled from "styled-components";
import { createTheme } from "@mui/material/styles";
import * as muiStyles from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #212529;
  padding-bottom: 1rem;

  img {
    width: 6.125rem;
    height: 1rem;
  }
`;

export const StyledButton = muiStyles.styled(Button)`
    background-color: #212529;
    text-transform: capitalize;
    font-size: 0.7rem;

    &:hover {
        background-color: #343B41;
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
