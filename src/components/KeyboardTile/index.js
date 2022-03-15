import React from "react";
import { KeyboardTile } from "../Keyboard/styles";

export default function KeyboardTileElement({...props}) {
    return (
        <KeyboardTile {...props}>{props.letter}</KeyboardTile>
    )   
}