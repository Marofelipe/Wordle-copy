import React from "react";
import { TileContainerKeyboard } from "./styles";

export default function Keyboard({...props}) 
{
    const { label } = props;
    return(
        <TileContainerKeyboard {...props}>
            <div>{label}</div>
        </TileContainerKeyboard>
    )
}