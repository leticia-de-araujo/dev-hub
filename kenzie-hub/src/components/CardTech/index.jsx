import { useState } from "react";
import FormEditDeleteTech from "../FormEditDeleteTech";

const CardTech = ({
  tech,
  openModalEditDelete,
  setOpenModalEditDelete,
  techStatus,
}) => {
  const [techId, setTechId] = useState("");

  const handleOpenModalEditDelete = (currentTech) => {
    console.log(currentTech);
    setOpenModalEditDelete(true);
    setTechId(currentTech);
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

  return (
    tech && (
      <>
        <li
          onClick={() => {
            handleOpenModalEditDelete(tech);
          }}
        >
          <h4>{tech.title}</h4>
          <div className="Main-li-right">
            <p>{techStatusTranslated}</p>
          </div>
        </li>

        <FormEditDeleteTech
          tech={tech}
          techId={techId}
          techStatus={techStatus}
          openModalEditDelete={openModalEditDelete}
          setOpenModalEditDelete={setOpenModalEditDelete}
        />
        {console.log(techId)}
      </>
    )
  );
};

export default CardTech;
