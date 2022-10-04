import styled from "styled-components";

export const StyledSquare = styled.button`
  background: rgb(66, 66, 66);
  border: 1px solid white;
  color: white;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  float: left;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  height: calc(100vmin / 3 - 20px);
  width: calc(100vmin / 3 - 20px);
  max-height: 100px;
  max-width: 100px;
  cursor: ${({ cursor }) => cursor || "default"};
  @media (max-height: 600px) {
    height: calc(100vmin / 3 - 50px);
    width: calc(100vmin / 3 - 50px);
  }
  @media (max-height: 200px) or (max-width: 200px) {
    font-size: 20px;
  }
`