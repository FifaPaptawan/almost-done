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

const MainSec = styled.section`
  border: black;
  padding: 10px 10px;
  float: left;
  color: black;
  background-color: white;
`;

const SecondarySec = styled.section`
  color: red;
`;

const ThirdSec = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: repeat(3, auto);
  grid-gap: 1px 20px;
`;

const h1 = styled.section`
  color: ;
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
