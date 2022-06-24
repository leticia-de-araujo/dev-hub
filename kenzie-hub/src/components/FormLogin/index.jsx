import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StyledPaper, StyledForm, StyledTextField } from "./style";
import { theme } from "../../styles/global";
import api from "../../services/api";
import { useEffect } from "react";

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
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });


  const onSubmitFunction = (dataUser) => {
   ;
    window.localStorage.clear();
    api
      .post("/sessions", dataUser, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const idUser = response.data.user.id;
        window.localStorage.setItem("userId", idUser);

        const token = response.data.token;
        window.localStorage.setItem("token", token);

        reset();

        toast.success("Successful login!", {
          position: "top-right",
          autoClose: 1900,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        const goToHome = () => {
          history.push(`/home/${idUser}`);
        };

        setTimeout(goToHome, 2200);
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          "Login failed! Please check if your email and password are correct.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </StyledPaper>
  );
};

export default FormLogin;
