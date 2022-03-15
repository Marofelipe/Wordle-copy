import styled from "styled-components";

export const KeyboardMain = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
`;

export const KeyboardContainer = styled.section`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const KeyboardTile = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 5px;
  margin: 2px;
  color: white;
  font-weight: bold;
  border: 1px black;
  border-style: solid;
  // Arrow function que passa um ternário (estrutura de decisão). Faz um ternário dentro e ternário como se fosse else if
  background-color: ${({state}) => state === "right-place" ? "#6aaa64" : state === "wrong-place" ? "#c9b458" : "gray"};
`;


