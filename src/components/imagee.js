import React from "react";
import logo from "../logo.png";
import styled from "styled-components";

function Imagee() {
  return (
    <div className="Container">
      <Image src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

const Image = styled.img`
  width: 690px;
  height: auto;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Imagee;

/*.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}*/
