import React from "react";
import styled from "styled-components";
import { AiOutlineBehanceSquare } from "react-icons/ai";

function Name() {
  return (
    <MainSec>
      <Jobs> &nbsp; CEO of Apple</Jobs>
      <BEButton>
        <AiOutlineBehanceSquare />
      </BEButton>
    </MainSec>
  );
}
const MainSec = styled.div`
  font-size: 35px;
  display: flex;
  flex-direction: row;
`;
const BEButton = styled.button`
  color: whitesmoke;
  font-size: 35px;
  border-radius: 0px;
  border: none;
  background-color: #383838;
  padding: 35px 40px;
  cursor: pointer;

  &:hover {
    background-color: #333333;
  }
`;
const Jobs = styled.section`
  color: whitesmoke;
  display: flex;
  flex: 1;
  justify-content: left;
  align-items: center;
  background-color: #3d3d3d;
`;
export default Name;
