import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { Paper, Select, TextField } from "@mui/material";

export const StyledPaper = muiStyles.styled(Paper)`
    background-color: #212529;
    color: white;
    border-radius: 0.25rem;
    box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
    width: 17rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 1.5rem;

    .FormRegister-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6rem;

        & > h2 {
            font-weight: 700;
            font-size: 0.902rem;    
            margin-top: 2rem;

        }

        & > span {
            font-weight: 400;
            font-size: 0.7rem;
            color: #868E96;
        }
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
  gap: 1rem;

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

    input {
      font-size: 0.75rem;
    }
  }
`;

export const StyledTextField = muiStyles.styled(TextField)`
    width: 100%;
  input {
    color: #F8F9FA;
    background-color: #343B41;
    border-radius: 0.3rem;
}
  
    p {
        color: #F8F9FA;
    }
`;

export const StyledSelect = muiStyles.styled(Select)`
    width: 100%;
    background: #343b41;
    border-radius: 0.3rem;
    color: white;
    font-size: 0.8rem;


    p {
        color: #F8F9FA;
    }
  
`;
