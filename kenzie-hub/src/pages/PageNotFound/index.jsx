import { useHistory } from "react-router-dom";

import notFoundImg from "../../imgs/404 Error Page.png";

import { StyledButton, StyledDiv } from "./style";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "../../styles/global";

const PageNotFound = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/");
  };

  const MediaQuery = useMediaQuery("(min-width:700px)");

  return (
    <StyledDiv MediaQuery={MediaQuery}>
      <ThemeProvider theme={theme}>
        <img src={notFoundImg} alt="404 Error" />
        <StyledButton onClick={goToLogin} variant="contained">
          Go Back To Login
        </StyledButton>
      </ThemeProvider>
    </StyledDiv>
  );
};

export default PageNotFound;
