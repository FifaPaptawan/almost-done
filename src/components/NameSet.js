import React from "react";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import Imagee from "./imagee";
import Name from "./Name";
import Name2 from "./Name2";

function NameSet() {
  return (
    <Primary>
      <Imagee />
      <NameGroup>
        <Name2 />
        <Name />
        <ColorButton />
      </NameGroup>
    </Primary>
  );
}

export default NameSet;

const NameGroup = styled.div`
  display: flex;
  flex-direction column;
`;

const Primary = styled.div`
  display: flex;
  flex-direction: row;
`;
