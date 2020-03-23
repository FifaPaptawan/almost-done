import React from "react";
import styled from "styled-components";

function Personal() {
  return (
    <ZeroSec>
      <h1> PERSONAL INFO</h1>
      <FirstSec>
        <SecondSec>
          <SecondSec> NAME :</SecondSec>
          <SecondSec> BIRTH DATE :</SecondSec>
          <SecondSec> ADDRESS :</SecondSec>
          <SecondSec> PHONE :</SecondSec>
          <SecondSec> EMAIL :</SecondSec>
        </SecondSec>
        <ThirdSec>
          <ThirdSec>Steve Job</ThirdSec>
          <ThirdSec>24/2/1955</ThirdSec>
          <ThirdSec>69 Bass Road, LmaoXD, Uganda</ThirdSec>
          <ThirdSec>0123546789</ThirdSec>
          <ThirdSec>stevejob@apple.com</ThirdSec>
        </ThirdSec>
      </FirstSec>
    </ZeroSec>
  );
}

const ZeroSec = styled.div`
  color: black;
  padding: 20px 10px;
  background-color: #e6e6e6;
`;

const FirstSec = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 250px);
  grid-template-rows: repeat(2, auto);
`;

const SecondSec = styled.section`
  color: black;
  font-weight: bold;
`;

const ThirdSec = styled.section`
  color: #696969;
`;

export default Personal;
