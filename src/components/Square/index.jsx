import { StyledSquare } from "./styles";

const Square = ({ onClick, value }) => {
  return (
    <StyledSquare cursor={`${value ? "default" : "pointer"}`} onClick={onClick}>
      {value}
    </StyledSquare>
  );
};

export default Square;
