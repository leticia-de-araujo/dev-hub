import StyledHeader from "./style";

const Header = ({ name, courseModule }) => {
  return (
    <StyledHeader>
      <h2>Hello, {name}</h2>
      <p>{courseModule}</p>
    </StyledHeader>
  );
};

export default Header;
