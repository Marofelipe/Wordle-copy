import React from "react";
import TopMenuElement from "../../components/TopMenu";
import WordTile from "../../components/WordTile";
import Keyboard from "../../components/Keyboard";


export default function GameDashboard() {
  
  const Alfabeto = ["A", "B", "C", "D"];
  return(
    <body>
      <TopMenuElement />
      <WordTile state="" label={Alfabeto[0]} />
      <WordTile state="" label={Alfabeto[1]} />
      <WordTile state="" label={Alfabeto[2]} />
      <WordTile state="" label={Alfabeto[3]} />
      <Keyboard/> 
    </body>
  );
};