import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Backdrop,
  Modal,
  Fade,
  Button,
  MenuItem,
  IconButton,
  Icon,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { StyledBox, StyledForm, StyledTextField, StyledButton } from "./style";

import api from "../../services/api";

const FormAddTech = ({
  techs,
  userTechs,
  setUserTechs,
  openModalAdd,
  setOpenModalAdd,
}) => {
  const [status, setStatus] = useState("Begginer");

  const techStatus = [
    {
      value: "Begginer",
      label: "Begginer",
    },
    {
      value: "Intermediary",
      label: "Intermediary",
    },
    {
      value: "Advanced",
      label: "Advanced",
    },
  ];

  const handleChange = (event) => {
    setStatus(event.target.value);
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
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: "",
      status: `${techStatus[0].value}`,
    },
  });

  const userToken = window.localStorage.getItem("token");

  console.log(userToken);

  const onSubmitFunction = (data) => {
    api
      .post(`/users/techs`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUserTechs([...userTechs, response.data]);
        handleCloseModalAdd();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCloseModalAdd = () => {
    reset();
    setOpenModalAdd(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModalAdd}
        onClose={handleCloseModalAdd}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
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
                Select your current level of knowledge
                <StyledTextField
                  id="outlined-select-module"
                  size="small"
                  color="secondary"
                  {...register("status")}
                  select
                  value={status}
                  onChange={handleChange}
                >
                  {techStatus.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </StyledTextField>
              </label>
              <StyledButton type="submit">Add tech</StyledButton>
            </StyledForm>
          </StyledBox>
        </Fade>
      </Modal>
    </div>
  );
};

export default FormAddTech;
