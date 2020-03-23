import React from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";

function Name2() {
  return (
    <MainSec>
      <Namee> &nbsp; Steve jobs</Namee>
      <DLButton>
        <IoIosAddCircle />
      </DLButton>
    </MainSec>
  );
}
const MainSec = styled.section`
  font-size: 35px;
  display: flex;
  flex-direction: row;
`;
const DLButton = styled.button`
  color: whitesmoke;
  font-size: 35px;
  border-radius: 0px;
  border: none;
  padding: 35px 40px;
  background-color: #454545;
  cursor: pointer;
  &:hover {
    background-color: #3d3d3d;
  }
`;
const Namee = styled.section`
  color: whitesmoke;
  display: flex;
  flex: 1;
  justify-content: left;
  align-items: center;
  background-color: #4e4e4e;
`;
export default Name2;
