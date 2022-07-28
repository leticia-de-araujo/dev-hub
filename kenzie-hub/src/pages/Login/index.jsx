import FormLogin from "../../components/FormLogin";


import { Box } from "@mui/material";
import { StyledHeader } from "./style";

const Login = () => {
  return (
    <Box>
      <StyledHeader>
        <h1>DevHub</h1>
      </StyledHeader>

      <FormLogin />
    </Box>
  );
};
export default Login;
