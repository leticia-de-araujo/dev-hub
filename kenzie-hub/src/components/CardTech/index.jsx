const CardTech = ({ tech, setOpenModalEditDelete }) => {
  const handleOpenModalEditDelete = () => {
    setOpenModalEditDelete(true);
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
    <>
      <li id={tech.id} onClick={handleOpenModalEditDelete}>
        <h4>{tech.title}</h4>
        <div className="Main-li-right">
          <p>{techStatusTranslated}</p>
        </div>
      </li>
    </>
  );
};

export default CardTech;
