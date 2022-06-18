import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { Paper, TextField } from "@mui/material";

export const StyledPaper = muiStyles.styled(Paper)`
    background-color: #212529;
    color: white;
    border-radius: 0.25rem;
    box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25rem;

    header {
        margin-bottom: 1.25rem;
    }

    h2 {
        font-weight: 700;
        font-size: 0.902rem;    
         margin-top: 2rem;

    }
`;

export const StyledForm = styled.form`
  width: 16.25rem;
  padding: 1rem;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 0.611rem;
    color: #f8f9fa;

    & > div {
      margin-top: 0.8rem;
    }
  }

  .div-createAccount {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 4rem;
    justify-content: space-between;
    margin-bottom: 2rem;

    span {
      font-size: 0.8rem;
      color: #868e96;
      font-weight: 600;
    }
  }
`;

export const StyledTextField = muiStyles.styled(TextField)`
    background-color: #343B41;
    border-radius: 0.201rem;
    width: 100%;

  input {
    color: #F8F9FA;
  }
 
`;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF577F",
    },
    secondary: {
      main: "#868e96",
    },
  },
});
