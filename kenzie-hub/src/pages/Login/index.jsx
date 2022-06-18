import FormLogin from "../../components/FormLogin";

import Logo from "../../imgs/Logo.png";
import { Box } from "@mui/material";

const Login = () => {
  return (
    <Box>
      <header style={{ textAlign: "center" }}>
        <img src={Logo} alt="Logo Kenzie Hub" />
      </header>
      <FormLogin />
    </Box>
  );
};
export default Login;
