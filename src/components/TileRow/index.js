import React from "react";
import { Row } from "../../styles/styles";
import WordTile from "../WordTile";

export default function RowTile({...props}){
  const {
    length,
    word,
    state,
  } = props;

  function renderEmptyTiles(length) {
    var Row = [];
    for (var i = 0; i < length; i++) {
      Row.push(<WordTile />)
    }
    return Row;
  }
  return(
    <Row>
      {word ? 
        word?.map((label, index) => <WordTile label={label} state={state[index]} />)
        :
        renderEmptyTiles(length)
        }
    </Row>
  );
}