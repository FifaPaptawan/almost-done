import React from "react";
import logo from "../logo.png";
import styled from "styled-components";

function Imagee() {
  return <Image src={logo} className="App-logo" alt="logo" />;
}

const Image = styled.img`
  width: 500px;
  height: auto;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Imagee;
