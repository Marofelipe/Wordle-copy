import React from "react";
import { TileContainer } from "./styles";

export default function WordTile({...props}) {
  return(
    <TileContainer {...props}>
      {props.label && <label>{props.label}</label>}
    </TileContainer>
  );
}