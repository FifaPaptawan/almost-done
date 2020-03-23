import React from "react";
import styled from "styled-components";
import Info from "./Info";
import Personal from "./Personal";

function InfoSet() {
  return (
    <Infoset>
      <Info />
      <Personal />
    </Infoset>
  );
}

export default InfoSet;

const Infoset = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
