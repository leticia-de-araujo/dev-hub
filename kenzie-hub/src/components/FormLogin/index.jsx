import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { StyledPaper, StyledForm, StyledTextField, theme } from "./style";
import api from "../../services/api";

const FormLogin = () => {
  const history = useHistory();

  const goToRegister = () => {
    history.push("/register");
  };

  const formSchema = yup.object().shape({
    email: yup.string().required("Email is required.").email("Invalid email."),
    password: yup.string().required("Password is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const clearInputs = (event) => {
    const inputs = [...event.target.elements];
    console.log(inputs);
    inputs.forEach((input) => {
      input.value = "";
    });
  };

  const onSubmitFunction = (dataUser, event) => {
    console.log(dataUser);
    api
      .post("/sessions", dataUser, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);

        const idUser = response.data.user.id;
        console.log(idUser);

        const token = response.data.token;
        console.log(token);
        window.localStorage.setItem("token", token)

        clearInputs(event);
        
        history.push(`/home/${idUser}`);
      })
      .catch((error) => {
        console.log(error);
        clearInputs(event);
      });
  };

  return (
    <StyledPaper elevation={3}>
      <h2>Login</h2>

      <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
        <ThemeProvider theme={theme}>
          <label>
            Email
            <StyledTextField
              variant="outlined"
              size="small"
              color="secondary"
              placeholder="Your email"
              {...register("email")}
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email.message : null}
            />
          </label>
          <label>
            Password
            <StyledTextField
              variant="outlined"
              size="small"
              color="secondary"
              placeholder="Your password"
              type="password"
              {...register("password")}
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : null}
            />
          </label>

          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "capitalize", width: "100%" }}
            type="submit"
          >
            Sign In
          </Button>
          <div className="div-createAccount">
            <span>Don't have an account?</span>
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: "capitalize", width: "100%" }}
              onClick={goToRegister}
            >
              Create an account
            </Button>
          </div>
        </ThemeProvider>
      </StyledForm>
    </StyledPaper>
  );
};

export default FormLogin;
