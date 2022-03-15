import React from "react";
import KeyboardTileElement from "../KeyboardTile";
import { KeyboardContainer, KeyboardMain } from "./styles";


export default function Keyboard() {
  var topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  var middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  var bottomRow = ["Z", "X", "C", "V", "B", "N", "M"]
  return (
    <KeyboardMain>
    <KeyboardContainer>
    {/* Função map equivalente a um for each. */}
    {topRow.map(top=><KeyboardTileElement letter={top} state="wrong-place"/>)}
    </KeyboardContainer>
    <KeyboardContainer>
    {middleRow.map(mid=><KeyboardTileElement letter={mid} state="right-place"/>)}
    </KeyboardContainer>
    <KeyboardContainer>
    {bottomRow.map(bot=><KeyboardTileElement letter={bot} state="right-place"/>)}
    </KeyboardContainer>
    </KeyboardMain>
  );
}
