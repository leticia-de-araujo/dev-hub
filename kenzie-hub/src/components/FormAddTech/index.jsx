import { useState } from "react";

import api from "../../services/api";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Backdrop, Modal, Fade, MenuItem, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  StyledBox,
  StyledForm,
  StyledTextField,
  StyledButton,
  StyledModal,
  StyledSelect,
} from "./style";

const FormAddTech = ({
  userTechs,
  setUserTechs,
  techStatus,
  openModalAdd,
  setOpenModalAdd,
}) => {
  const [statusAdd, setStatusAdd] = useState("Iniciante");

  const handleChange = (event) => {
    setStatusAdd(event.target.value);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Tech name is required."),
    status: yup
      .string()
      .required("Please select your current level of knowledge"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const userToken = window.localStorage.getItem("token");

  const onSubmitFunction = (data) => {
    api
      .post(`/users/techs`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setUserTechs([...userTechs, response.data]);
        toast.success("Tech added successfully!", {
          position: "top-right",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        handleCloseModalAdd();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ops! Something went wrong.", {
          position: "top-right",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        handleCloseModalAdd();
      });
  };

  const handleCloseModalAdd = () => {
    reset();
    setOpenModalAdd(false);
  };

  return (
    <>
      {openModalAdd && (
        <StyledModal>
          <Fade in={openModalAdd}>
            <StyledBox>
              <div className="FormAddTech-Box-header">
                <h2>Add technology</h2>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={handleCloseModalAdd}
                >
                  <CloseIcon sx={{ width: "1rem", height: "1rem" }} />
                </IconButton>
              </div>

              <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
                <label>
                  Tech name
                  <StyledTextField
                    id="transition-modal-description"
                    sx={{ mt: 2 }}
                    variant="outlined"
                    size="small"
                    color="secondary"
                    placeholder="Tech name"
                    {...register("title")}
                    error={errors.title ? true : false}
                    helperText={errors.title ? errors.title.message : null}
                  />
                </label>

                <label>
                  Select your current level of knowledge in this tech
                  <StyledSelect
                    id="outlined-select-module"
                    size="small"
                    color="secondary"
                    {...register("status")}
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                    value={statusAdd}
                    onChange={handleChange}
                  >
                    {techStatus.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </label>
                <StyledButton variant="contained" type="submit">
                  Add tech
                </StyledButton>
              </StyledForm>
            </StyledBox>
          </Fade>
        </StyledModal>
      )}
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
    </>
  );
};

export default FormAddTech;
