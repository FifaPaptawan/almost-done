import React from "react";
import styled from "styled-components";

function Name() {
  return (
    <MainSec>
      <Jobs>CEO of Apple</Jobs>
      <BEButton>BE</BEButton>
    </MainSec>
  );
}
const MainSec = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

const Jobs = styled.section`
  color: whitesmoke;
  padding: 30px 304.75px;
  background-color: #3d3d3d;
`;

const BEButton = styled.section`
  color: whitesmoke;
  padding: 30px 20px;
  background-color: #696969;

  cursor: pointer;
`;

/* <MainSec>
<Jobs>CEO of Applelelelele</Jobs>
<BEButton>BE</BEButton>
</MainSec>*/

//<button>Download</button>;

/*const button = styled.section`
  background: blue;
  color: whitesmoke;
  font-size: 35px;
  padding: 30px 30px;
  background-color: #3d3d3d;
  float: right;
`;
*/
export default Name;

/*class NameTag extends React.Component {
  render() {
    return (
      <div>
        <button class="btnup ">Steve Job</button>
        <button class="btnup2 ">Download</button>
      </div>
    );
  }
}
*/

/*dasdasd*/
