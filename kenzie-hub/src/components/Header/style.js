import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 19%;
  margin-top: 62px;
  padding: 33px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
  border-top: 1px solid #212529;
  border-bottom: 1px solid #212529;

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: #f8f9fa;
  }

  p {
    font-weight: 400;
    font-size: 0.8rem;
    color: #868e96;
  }
`;

export default StyledHeader;
