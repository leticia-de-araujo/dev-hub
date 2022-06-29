import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: ${(props) => (props.MediaQuery ? "39vw" : "90vw")};

  img {
    width: 100%;
  }
`;

export const StyledButton = muiStyles.styled(Button)`
    text-transform: capitalize;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    width: 53%;
`;
