/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

import { ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { StyledMain, StyledButton } from "./style";
import { theme } from "../../styles/global";

import FormAddTech from "../FormAddTech";
import FormEditDeleteTech from "../FormEditDeleteTech";
import CardTech from "../CardTech";

const Main = ({
  techs,
  openModalAdd,
  setOpenModalAdd,
  openModalEditDelete,
  setOpenModalEditDelete,
}) => {
  const [userTechs, setUserTechs] = useState(techs);

  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
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
          <div className="Main-topDiv-left">
            <h3>Technologies</h3>
            <span>Click on a technology to edit or delete it</span>
          </div>

          <StyledButton
            variant="filled"
            aria-label="add"
            onClick={handleOpenModalAdd}
          >
            <AddIcon sx={{ color: "#fff" }} />
          </StyledButton>
        </div>
        <ul className="Main-ul">
          {userTechs.length !== 0 &&
            userTechs.map((tech) => {
              return (
                <CardTech
                  key={tech.id}
                  tech={tech}
                  setOpenModalEditDelete={setOpenModalEditDelete}
                />
              );
            })}
        </ul>
        <FormAddTech
          techStatus={techStatus}
          userTechs={userTechs}
          setUserTechs={setUserTechs}
          openModalAdd={openModalAdd}
          setOpenModalAdd={setOpenModalAdd}
        />
        <FormEditDeleteTech
          techStatus={techStatus}
          openModalEditDelete={openModalEditDelete}
          setOpenModalEditDelete={setOpenModalEditDelete}
        />
      </ThemeProvider>
    </StyledMain>
  );
};

export default Main;
