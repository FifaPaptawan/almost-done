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
  padding: 35px 290.5px;
  background-color: #3d3d3d;
`;

const BEButton = styled.section`
  color: whitesmoke;
  padding: 35px 54px;
  background-color: #303030;

  cursor: pointer;
`;

export default Name;
