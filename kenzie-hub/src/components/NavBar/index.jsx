/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { StyledButton, StyledNavBar, theme } from "./style";

const NavBar = ({ homePage, setHomePage }) => {
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname.includes("/home/")) {
      setHomePage(true);
    }
  }, []);

  const goToLogin = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledNavBar>
        <h1>DevHub</h1>

        <StyledButton variant="contained" onClick={goToLogin}>
          {!homePage ? "Go back to Login" : "Sign out"}
        </StyledButton>
      </StyledNavBar>
    </ThemeProvider>
  );
};

export default NavBar;
