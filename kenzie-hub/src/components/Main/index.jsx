/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

import { ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

import { StyledMain, StyledButton } from "./style";
import { theme } from "../../styles/global";

import FormAddTech from "../FormAddTech";

import CardTech from "../CardTech";
import ModalEdit from "../ModalEdit";

const Main = ({ techs, openModalAdd, setOpenModalAdd }) => {
  const [userTechs, setUserTechs] = useState(techs);

  const [modalEdit, setModalEdit] = useState(false);

  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
  };

  const openModalEdit = () => {
    setModalEdit(true);
  };

  const techStatus = [
    {
      value: "Iniciante",
      label: "Begginer",
    },
    {
      value: "Intermediário",
      label: "Intermediary",
    },
    {
      value: "Avançado",
      label: "Advanced",
    },
  ];

  return (
    <StyledMain>
      <ThemeProvider theme={theme}>
        <div className="Main-topDiv">
          <h3>Technologies</h3>

          <div className="Main-topDiv-buttons">
            <StyledButton
              variant="filled"
              aria-label="add"
              onClick={handleOpenModalAdd}
            >
              <AddIcon sx={{ color: "#fff" }} />
            </StyledButton>

            <StyledButton
              variant="filled"
              aria-label="edit"
              onClick={openModalEdit}
            >
              <EditIcon />
            </StyledButton>
          </div>
        </div>
        {userTechs.length !== 0 && (
          <ul className="Main-ul">
            {userTechs.map((tech) => {
              return (
                <CardTech
                  key={tech.id}
                  tech={tech}
                  userTechs={userTechs}
                  setUserTechs={setUserTechs}
                />
              );
            })}
          </ul>
        )}

        <FormAddTech
          techStatus={techStatus}
          userTechs={userTechs}
          setUserTechs={setUserTechs}
          openModalAdd={openModalAdd}
          setOpenModalAdd={setOpenModalAdd}
        />

        {modalEdit && (
          <ModalEdit
            techs={techs}
            userTechs={userTechs}
            setUserTechs={setUserTechs}
            techStatus={techStatus}
            modalEdit={modalEdit}
            setModalEdit={setModalEdit}
            openModalEdit={openModalEdit}
          />
        )}
      </ThemeProvider>
    </StyledMain>
  );
};

export default Main;
