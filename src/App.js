import React from "react";
import styled from "styled-components";
import "./App.css";
import InfoSet from "./components/InfoSet";
import NameSet from "./components/NameSet";

function App() {
  return (
    <Container>
      <NameSet />
      <InfoSet />
    </Container>
  );
}
export default App;

const Container = styled.div`
  display: flex;
  flex-direction column;
`;
