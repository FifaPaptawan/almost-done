import React from "react";
import styled from "styled-components";

function Name2() {
  return (
    <MainSec>
      <Namee>Steve jobs</Namee>
      <DLButton>Download</DLButton>
    </MainSec>
  );
}
const MainSec = styled.section`
  font-size: 20px;
  display: flex;
  flex-direction: row;
`;

const DLButton = styled.section`
  color: whitesmoke;
  padding: 30px 20px;
  background-color: #696969;
  cursor: pointer;
`;

const Namee = styled.section`
  color: whitesmoke;
  padding: 30px 304.75px;
  background-color: #3d3d3d;
`;

export default Name2;
