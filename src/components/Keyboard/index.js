import React from "react";
import { KeyboardContainer } from "./styles";
import { TileKeyboard } from "./styles";

export default function Keyboard() {
  return (
    <KeyboardContainer>
        <TileKeyboard>Q</TileKeyboard>
        <TileKeyboard>W</TileKeyboard>
        <TileKeyboard>E</TileKeyboard>
        <TileKeyboard>R</TileKeyboard>
        <TileKeyboard>T</TileKeyboard>
        <TileKeyboard>Y</TileKeyboard>
        <TileKeyboard>U</TileKeyboard>
        <TileKeyboard>I</TileKeyboard>
        <TileKeyboard>O</TileKeyboard>
        <TileKeyboard>P</TileKeyboard>
    </KeyboardContainer>
  );
}
