import { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Backdrop, Modal, Fade, MenuItem, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { StyledBox, StyledForm, StyledTextField, StyledButton } from "./style";

const FormEditDeleteTech = ({
  techStatus,
  openModalEditDelete,
  setOpenModalEditDelete,
}) => {
  const [statusEditDelete, setStatusEditDelete] = useState("");

  const handleCloseModalEditDelete = () => {
    setOpenModalEditDelete(false);
  };

  //   const [currentUser, setCurrentUser] = useState(undefined);

  //   const params = useParams();

  //   useEffect(() => {
  //     api
  //       .get(`/users/${params.id}`)
  //       .then((response) => {
  //         setCurrentUser(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

  //   const userToken = window.localStorage.getItem("token");

  const handleChange = (event) => {
    setStatusEditDelete(event.target.value);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Tech name is required."),
    status: yup
      .string()
      .required("Please select your current level of knowledge in this tech"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: "",
      status: ``,
    },
  });

  const onSubmitFunction = (data) => {};

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModalEditDelete}
        onClose={handleCloseModalEditDelete}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModalEditDelete}>
          <StyledBox>
            <div className="FormEditDeleteTech-Box-header">
              <h2>Tech details</h2>
              <IconButton
                color="primary"
                size="small"
                onClick={handleCloseModalEditDelete}
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
                Your current level of knowledge in this tech
                <StyledTextField
                  id="outlined-select-module"
                  size="small"
                  color="secondary"
                  {...register("status")}
                  select
                  value={statusEditDelete}
                  onChange={handleChange}
                >
                  {techStatus.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </StyledTextField>
              </label>
              <StyledButton>Edit tech</StyledButton>
              <StyledButton>Delete Tech</StyledButton>
            </StyledForm>
          </StyledBox>
        </Fade>
      </Modal>
    </div>
  );
};

export default FormEditDeleteTech;
