import React from "react";
import styled from "styled-components";

function Name() {
  return (
    <MainSec>
      <Jobs>CEO of Apple</Jobs>
      <BEButton>BE</BEButton>
    </MainSec>
  );
}
const MainSec = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
`;

const Jobs = styled.section`
  color: whitesmoke;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #3d3d3d;
`;

const BEButton = styled.section`
  color: whitesmoke;
  background-color: #303030;
  padding: 35px 54px;
  cursor: pointer;
`;

export default Name;
