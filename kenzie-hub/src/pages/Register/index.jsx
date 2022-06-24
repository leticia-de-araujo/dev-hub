import { Box } from "@mui/material";
import FormRegister from "../../components/FormRegister";
import NavBar from "../../components/NavBar";
import { StyledDivRegister } from "./style";

const Register = ({ homePage, setHomePage }) => {
  return (
    <StyledDivRegister>
      <NavBar homePage={homePage} setHomePage={setHomePage} />
      <FormRegister />
    </StyledDivRegister>
  );
};
export default Register;
