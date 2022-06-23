/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Main from "../../components/Main";
import NavBar from "../../components/NavBar";
import api from "../../services/api";
import { StyledDivHome } from "./style";

const Home = ({ homePage, setHomePage }) => {
  const params = useParams();

  const [user, setUser] = useState(undefined);

  const [openModalAdd, setOpenModalAdd] = useState(false);

  const [openModalEditDelete, setOpenModalEditDelete] = useState(false);

  useEffect(() => {
    api
      .get(`/users/${params.id}`)
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    user && (
      <StyledDivHome>
        <NavBar homePage={homePage} setHomePage={setHomePage} />
        <Header name={user.data.name} courseModule={user.data.course_module} />
        <Main
          techs={user.data.techs}
          openModalAdd={openModalAdd}
          setOpenModalAdd={setOpenModalAdd}
          openModalEditDelete={openModalEditDelete}
          setOpenModalEditDelete={setOpenModalEditDelete}
        />
      </StyledDivHome>
    )
  );
};

export default Home;
