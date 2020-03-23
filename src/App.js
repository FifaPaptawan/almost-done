import React from "react";
import styled from "styled-components";
import "./App.css";
import ColorButton from "./components/ColorButton";
import NameTag from "./components/Name";
import Info from "./components/Info";
import Imagee from "./components/imagee";
import Name2 from "./components/Name2";

function App() {
  return (
    <Container>
      <Imagee />
      <div>
        <Name2 />
        <NameTag />
        <ColorButton />
      </div>
      <Info />
    </Container>
  );
}
export default App;

const Container = styled.div`
  display: flex;
  flex-direction row;
`;
