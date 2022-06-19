import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

import Logo from "../../imgs/Logo.png";
import { StyledHeader, theme } from "./style";

const Header = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <img src={Logo} alt="Logo Kenzie Hub" />
        <Button
          variant="contained"
          color="secondary"
          sx={{ textTransform: "capitalize", fontSize: "0.7rem" }}
          onClick={goToLogin}
        >
          Go back
        </Button>
      </StyledHeader>
    </ThemeProvider>
  );
};

export default Header;
