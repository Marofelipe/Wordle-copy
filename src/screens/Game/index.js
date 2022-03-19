import React, { useState } from "react";
import GameBoard from "../../components/GameBoard";
import Keyboard from "../../components/Keyboard";
import TopMenuElement from "../../components/TopMenu";

export default function GameDashboard() {
  const [gameStatus, setGameStatus] = useState([
    {letters: ["B", "A", "I", "L", "E"] , status : ["right-place", "wrong", "wrong", "wrong", "wrong-place"]},
    {letters: ["B", "A", "I", "L", "E"] , status : ["right-place", "right-place", "right-place", "right-place", "wrong-place"]},
    {letters: [] , status : []},
    {letters: [] , status : []},
    {letters: [] , status : []},
    {letters: [] , status : []},
  ]);
  return(
    <body>
      <TopMenuElement />
      <GameBoard chances={6} letters={5} gameStatus={gameStatus} />
      <Keyboard/>
    </body>
  );
}
