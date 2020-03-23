import React from "react";
import styled from "styled-components";

function Info() {
  return (
    <MainSec>
      <h1>FREE RESUME PICKED UP FROM TRASH CAN</h1>
      <SecondarySec>
        <h2>THE BEST RESUME EVER TRUST ME</h2>
        <ThirdSec>
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
        </ThirdSec>
      </SecondarySec>
    </MainSec>
  );
}

export default Info;

const MainSec = styled.div`
  border: black;
  color: black;
  background-color: #f5f5f5;
  padding: 30px 50px;
`;

const SecondarySec = styled.section`
  color: red;
  font-size: 15px;
`;

const ThirdSec = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 240px);
  grid-template-rows: repeat(3, auto);
  grid-gap: 1px 15px;
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
