import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import { Button, MenuItem } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { StyledPaper, StyledForm, StyledTextField } from "./style";
import { theme } from "../../styles/global";
import api from "../../services/api";
import { useEffect, useState } from "react";

const FormRegister = () => {
  const history = useHistory();

  const [module, setModule] = useState(
    "First module (Introduction to Frontend)"
  );

  const modules = [
    {
      value: "First module (Introduction to Frontend)",
      label: "First module",
    },
    {
      value: "Second module (Advanced front-end)",
      label: "Second module",
    },
    {
      value: "Third module (Introduction to Backend)",
      label: "Third module",
    },
    {
      value: "Fourth module (Advanced Backend)",
      label: "Fourth module",
    },
  ];

  const handleChange = (event) => {
    setModule(event.target.value);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup.string().required("Email is required.").email("Invalid email."),
    password: yup
      .string()
      .required("Password is required.")
      .min(6, "Password must have at least 6 characters."),
    confirmPassword: yup
      .string()
      .required("You need to confirm your passsword.")
      .oneOf([yup.ref("password")], "Password didn't match."),
    bio: yup.string().required("Bio is required."),
    contact: yup.string().required("Contact is required"),
    course_module: yup.string().required("Please select your module"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      bio: "",
      contact: "",
      course_module: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmitFunction = (dataUser) => {
    const dataFixedArray = Object.entries(dataUser).filter(
      (entrie) => entrie[0] !== "confirmPassword"
    );

    let dataObject = {};

    dataFixedArray.forEach((entrie) => {
      let key = entrie[0];
      let value = entrie[1];
      dataObject[key] = value;
    });

    api
      .post("/users", dataObject, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        toast.success(
          "Congratulations, your account has been successfully created! Please log in.",
          {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );

        const goToLogin = () => {
          history.push("/");
        };

        setTimeout(goToLogin, 3100);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data.message === "Email already exists") {
          toast.error("Email already exists! Please use a different email.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };

  return (
    <StyledPaper elevation={3}>
      <div className="FormRegister-header">
        <h2>Create an account</h2>
        <span>It's fast and free.</span>
      </div>

      <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
        <ThemeProvider theme={theme}>
          <label>
            Name
            <StyledTextField
              variant="outlined"
              size="small"
              color="secondary"
              placeholder="Your full name"
              {...register("name")}
              error={errors.name ? true : false}
              helperText={errors.name ? errors.name.message : null}
            />
          </label>
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
          <label>
            Confirm password
            <StyledTextField
              variant="outlined"
              size="small"
              color="secondary"
              placeholder="Confirm your password"
              type="password"
              {...register("confirmPassword")}
              error={errors.confirmPassword ? true : false}
              helperText={
                errors.confirmPassword ? errors.confirmPassword.message : null
              }
            />
          </label>
          <label>
            Bio
            <StyledTextField
              variant="outlined"
              size="small"
              color="secondary"
              placeholder="Tell us a little about yourself"
              {...register("bio")}
              error={errors.bio ? true : false}
              helperText={errors.bio ? errors.bio.message : null}
            />
          </label>
          <label>
            Contact
            <StyledTextField
              variant="outlined"
              size="small"
              color="secondary"
              placeholder="Your phone number or your Linkedin url"
              {...register("contact")}
              error={errors.contact ? true : false}
              helperText={errors.contact ? errors.contact.message : null}
            />
          </label>
          <label>
            Select module
            <StyledTextField
              id="outlined-select-module"
              size="small"
              color="secondary"
              {...register("course_module")}
              select
              value={module}
              onChange={handleChange}
              //   error={errors.course_module ? true : false}
              //   helperText={
              //     errors.course_module ? errors.course_module.message : null
              //   }
            >
              {modules.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledTextField>
          </label>

          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "capitalize",
              width: "100%",
              mt: "0.6rem",
              mb: "0.6rem",
            }}
            type="submit"
          >
            Create your account
          </Button>
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

export default FormRegister;
