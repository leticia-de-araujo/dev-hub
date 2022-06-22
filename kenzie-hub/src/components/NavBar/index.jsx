/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Logo from "../../imgs/Logo.png";
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
        <img src={Logo} alt="Logo Kenzie Hub" />

        <StyledButton variant="contained" onClick={goToLogin}>
          {homePage ? "Sign out" : "Go back to Login"}
        </StyledButton>
      </StyledNavBar>
    </ThemeProvider>
  );
};

export default NavBar;
