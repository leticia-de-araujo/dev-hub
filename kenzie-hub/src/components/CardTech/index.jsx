import { useState } from "react";

import api from "../../services/api";

import { Box, Fade, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

import { StyledButton, StyledModal } from "./style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardTech = ({ tech, userTechs, setUserTechs }) => {
  const [modalDelete, setModalDelete] = useState(false);

  const openModalDelete = () => {
    setModalDelete(true);
  };

  const closeModalDelete = () => {
    setModalDelete(false);
  };

  const techStatusInEnglish = (status) => {
    if (status === "Iniciante") {
      return "Begginer";
    } else if (status === "Intermediário") {
      return "Intermediary";
    } else if (status === "Avançado") {
      return "Advanced";
    }
  };

  const techStatusTranslated = techStatusInEnglish(tech.status);

  const userToken = window.localStorage.getItem("token");

  const deleteTech = (techToDelete) => {
    api
      .delete(`/users/techs/${techToDelete.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        toast.success("Tech deleted successfully!", {
          position: "top-right",
          autoClose: 2200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        const newUserTechs = userTechs.filter((tech) => tech !== techToDelete);
        setUserTechs(newUserTechs);
        setTimeout(closeModalDelete, 3100);
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
        setTimeout(closeModalDelete, 3100);
      });
  };

  return (
    tech && (
      <>
        <li id={tech.id}>
          <h4>{tech.title}</h4>
          <div className="Main-li-right">
            <p>{techStatusTranslated}</p>
            <IconButton color="primary" size="small" onClick={openModalDelete}>
              <DeleteIcon sx={{ width: "1rem", height: "1rem" }} />
            </IconButton>
          </div>
        </li>
        {modalDelete && (
          <StyledModal>
            <Fade in={modalDelete}>
              <Box className="ModalDelete-box">
                <div className="ModalDelete-box-header">
                  <h3>Delete Tech</h3>
                  <IconButton
                    color="primary"
                    size="small"
                    onClick={closeModalDelete}
                  >
                    <CloseIcon sx={{ width: "1rem", height: "1rem" }} />
                  </IconButton>
                </div>
                <div className="ModalDelete-box-content">
                  <p>Are you sure you want to delete this tech?</p>
                  <div className="ModalDelete-box-buttons">
                    <StyledButton
                      variant="contained"
                      onClick={() => {
                        deleteTech(tech);
                      }}
                    >
                      Delete
                    </StyledButton>

                    <StyledButton
                      variant="outlined"
                      className="cancel-button"
                      onClick={closeModalDelete}
                    >
                      Cancel
                    </StyledButton>
                  </div>
                </div>
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
    )
  );
};

export default CardTech;
