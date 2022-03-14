import React from "react";
import RowTile from "../TileRow";

export default function GameBoard({...props}) {
  const { chances, letters } = props;

  function renderRows(length) {
    var Row = [];
    for (var i = 0; i < length; i++) {
      Row.push(<RowTile length={letters} />)
    }
    return Row;
  }

  return renderRows(chances)
}