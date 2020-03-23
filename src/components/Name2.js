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
  padding: 35px 20px;
  background-color: #4d4d4d;
  cursor: pointer;
`;

const Namee = styled.section`
  color: whitesmoke;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #5d5d5d;
`;

export default Name2;
