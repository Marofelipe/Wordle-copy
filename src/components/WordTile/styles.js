import styled from "styled-components";


export const TileContainer = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  align-items: center;
  justify-content: center;

  background-color: ${({state, label}) =>
    !label ? "transparent" : 
      state === "right-place" ?
        "green" :  
        state === "wrong-place" ?
          "yellow" :
          "gray"
  };

  label {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;

    color: white;
  }
`;