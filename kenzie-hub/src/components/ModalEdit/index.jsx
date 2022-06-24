import { useState } from "react";

import api from "../../services/api";

import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Box, Fade, IconButton, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { StyledButton, StyledForm, StyledModal, StyledSelect } from "./style";

const ModalEdit = ({
  userTechs,
  setUserTechs,
  techs,
  techStatus,
  modalEdit,
  setModalEdit,
  openModalEdit,
}) => {
  const [techTitle, setTechTitle] = useState(
    userTechs.length > 0 ? userTechs[0].title : ""
  );

  const [currentTechStatus, setCurrentTechStatus] = useState("Iniciante");

  const { register, handleSubmit } = useForm();

  const userToken = window.localStorage.getItem("token");

  const onSubmitFunction = (data) => {
    const techToEdit = userTechs.find((tech) => tech.title === data.title);
    const dataObject = {
      status: `${data.status}`,
    };

    api
      .put(`/users/techs/${techToEdit.id}`, dataObject, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        editTech(response);
        toast.success("Tech edited successfully!", {
          position: "top-right",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        closeModalEdit();
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
        closeModalEdit();
      });
  };

  const editTech = (resp) => {
    const techToEdit = userTechs.find((tech) => tech.title === resp.data.title);
    techToEdit.status = resp.data.status;
    return techToEdit;
  };

  const closeModalEdit = () => {
    setModalEdit(false);
  };

  const handleChangeTitle = (event) => {
    setTechTitle(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setCurrentTechStatus(event.target.value);
  };

  return (
    <>
      {modalEdit && (
        <StyledModal>
          <Fade in={modalEdit}>
            <Box className="ModalEdit-box">
              <div className="ModalEdit-box-header">
                <h2>Edit Tech</h2>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={closeModalEdit}
                >
                  <CloseIcon sx={{ width: "1rem", height: "1rem" }} />
                </IconButton>
              </div>

              <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
                <label>
                  Please select a tech
                  <StyledSelect
                    id="transition-modal-description"
                    sx={{ mt: 2 }}
                    variant="outlined"
                    size="small"
                    color="secondary"
                    placeholder="Tech name"
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                    value={techTitle}
                    {...register("title")}
                    onChange={handleChangeTitle}
                  >
                    {userTechs.map((tech) => (
                      <MenuItem key={tech.title} value={tech.title}>
                        {tech.title}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </label>

                <label>
                  Select your current level of knowledge in this tech
                  <StyledSelect
                    id="outlined-select-module"
                    size="small"
                    color="secondary"
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                    value={currentTechStatus}
                    {...register("status")}
                    onChange={handleChangeStatus}
                  >
                    {techStatus.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </label>
                <StyledButton variant="contained" type="submit">
                  Edit tech
                </StyledButton>
              </StyledForm>
            </Box>
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

export default ModalEdit;
