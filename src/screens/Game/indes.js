import React from "react";
import GameBoard from "../../components/GameBoard";
import TopMenuElement from "../../components/TopMenu";


export default function GameDashboard() {
  
  const Alphabet = ["A", "B", "C", "D", "A", "B", "C", "D"];

  return(
    <body>
      <TopMenuElement />
      <GameBoard chances={6} letters={5} />

    </body>
  );
};