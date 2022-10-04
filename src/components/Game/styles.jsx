import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
    vertical-align: center;
    background-color: rgb(66, 66, 66);
    color: white;
  }
`

export const Title = styled.div`
  margin-bottom: 40px;
  font-size: 40px;
  text-align: center;
`

export const StyledGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (orientation: portrait) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const GameBoard = styled.div`
  margin-right: 50px;
  @media (orientation: portrait) {
    margin-bottom: 50px;
    margin-right: 0px;
  }
`

export const GameInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
`

export const StyledStatus = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border-color: white;
  border-radius: 10px;
  border-width: 1px;
  color: white;
  cursor: pointer;
`;

export const StyledList = styled.ol`
  padding-left: 30px;
`