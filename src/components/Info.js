import React from "react";
import styled from "styled-components";

function Info() {
  return (
    <MainSec>
      <h1>FREE RESUME PICKED UP FROM TRASH CAN</h1>
      <h2>THE BEST RESUME EVER TRUST ME</h2>
      <SecondarySec>
        <Info1>
          Hello my name is Steve Jobs Test Test Test Test Test Test Test Test
          Test Test Test Test Test Test Test Test Test Test{" "}
        </Info1>
        <Info2>
          Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2
          Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2{" "}
        </Info2>
        <Info3>
          Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3
          Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3{" "}
        </Info3>
      </SecondarySec>
    </MainSec>
  );
}

export default Info;

const MainSec = styled.section`
  border: black;
  float: left;
`;

const SecondarySec = styled.section`
  display: flex;
  flex-direction: row;
`;

const h1 = styled.section`
  color: black;
`;

const h2 = styled.section`
  color: red;
`;

const Info1 = styled.section`
  color: #696969;
`;

const Info2 = styled.section`
  color: #696969;
`;

const Info3 = styled.section`
  color: #696969;
`;
