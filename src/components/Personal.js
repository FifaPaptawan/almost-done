import React from "react";
import styled from "styled-components";

function Personal() {
  return (
    <ZeroSec>
      <h1> PERSONAL INFO</h1>
      <FirstSec>
        <SecondSec>
          <Name> NAME :</Name>
          <Birth> BIRTH DATE :</Birth>
          <Address> ADDRESS :</Address>
          <Phone> PHONE :</Phone>
          <Email> EMAIL :</Email>
        </SecondSec>
        <ThirdSec>
          <Name2>Steve Job</Name2>
          <Birth2>24/2/1955</Birth2>
          <Address2>69 Bass Road, LmaoXD, Uganda</Address2>
          <Phone2>0123546789</Phone2>
          <Email2>stevejob@apple.com</Email2>
        </ThirdSec>
      </FirstSec>
    </ZeroSec>
  );
}
const ZeroSec = styled.section`
  color: black;
  padding: 20px 10px;
  background-color: #f5f5f5;
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

const Name = styled.section``;

const Birth = styled.section``;

const Address = styled.section``;

const Phone = styled.section``;

const Email = styled.section``;

const Name2 = styled.section``;

const Birth2 = styled.section``;

const Address2 = styled.section``;

const Phone2 = styled.section``;

const Email2 = styled.section``;

export default Personal;
