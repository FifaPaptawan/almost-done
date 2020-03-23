import React from "react";
import styled from "styled-components";
import Info from "./Info";

function TestTwo() {
  return (
    <Primary>
      <Info />
    </Primary>
  );
}
export default TestTwo;

const Primary = styled.div`
  display: flex;
  flex-direction: row;
`;
