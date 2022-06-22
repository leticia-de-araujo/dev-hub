/* eslint-disable react-hooks/exhaustive-deps */
import { Button, IconButton, ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { StyledMain, StyledButton } from "./style";
import { theme } from "../../styles/global";
import { useEffect, useState } from "react";
import api from "../../services/api";
import FormAddTech from "../FormAddTech";

const Main = ({ techs, openModalAdd, setOpenModalAdd }) => {
  const [userTechs, setUserTechs] = useState(techs);

  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
  };

  console.log(techs);

  return (
    <StyledMain>
      <ThemeProvider theme={theme}>
        <div className="Main-topDiv">
          <h3>Technologies</h3>
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
                <li>
                  <h4>{tech.title}</h4>
                  <div className="Main-li-right">
                    <p>{tech.status}</p>

                    <IconButton color="primary" size="small">
                      <DeleteOutlinedIcon
                        sx={{ width: "1rem", height: "1rem" }}
                      />
                    </IconButton>
                  </div>
                </li>
              );
            })}
        </ul>
        <FormAddTech
          techs={techs}
          openModalAdd={openModalAdd}
          setOpenModalAdd={setOpenModalAdd}
          userTechs={userTechs}
          setUserTechs={setUserTechs}
        />
      </ThemeProvider>
    </StyledMain>
  );
};

export default Main;
