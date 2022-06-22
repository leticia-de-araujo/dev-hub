import { Box } from "@mui/material";
import FormRegister from "../../components/FormRegister";
import NavBar from "../../components/NavBar";

const Register = ({ homePage, setHomePage }) => {
  return (
    <Box>
      <NavBar homePage={homePage} setHomePage={setHomePage} />
      <FormRegister />
    </Box>
  );
};
export default Register;
