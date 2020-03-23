import React from "react";
import styled from "styled-components";
import { IoIosHome } from "react-icons/io";
import { IoIosSchool } from "react-icons/io";
import { IoIosJournal } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";
import { AiFillCustomerService } from "react-icons/ai";
import { MdCreate } from "react-icons/md";

class ColorButton extends React.Component {
  render() {
    return (
      <ColorButtons>
        <Home>
          <IoIosHome />
          <TextXD>HOME</TextXD>
        </Home>
        <Resume>
          <IoIosSchool />
          <TextXD>RESUME</TextXD>
        </Resume>
        <Portfolio>
          <IoIosJournal />
          <TextXD>PORTFOLIO</TextXD>
        </Portfolio>
        <Contacts>
          <IoIosContacts />
          <TextXD>CONTACTS</TextXD>
        </Contacts>
        <Feedback>
          <AiFillCustomerService />
          <TextXD>FEEDBACK</TextXD>
        </Feedback>
        <Blog>
          <MdCreate />
          <TextXD>BLOG</TextXD>
        </Blog>
      </ColorButtons>
    );
  }
}

export default ColorButton;

const ColorButtons = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const Home = styled.button`
  color: whitesmoke;
  font-size: 25px;
  border-radius: 0px;
  border: none;
  padding: 35px 50px;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #01bd9b;

  &:hover {
    background-color: #019479;
  }
`;

const Resume = styled.button`
  color: whitesmoke;
  font-size: 25px;
  border-radius: 0px;
  border: none;
  padding: 35px 50px;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #0099de;

  &:hover {
    background-color: #0288c4;
  }
`;

const Portfolio = styled.button`
  color: whitesmoke;
  font-size: 25px;
  border-radius: 0px;
  border: none;
  padding: 35px 50px;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #af58ba;

  &:hover {
    background-color: #974aa1;
  }
`;

const Contacts = styled.button`
  color: whitesmoke;
  font-size: 25px;
  border-radius: 0px;
  border: none;
  padding: 30px 50px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff7f0c;

  &:hover {
    background-color: #c96306;
  }
`;

const Feedback = styled.button`
  color: whitesmoke;
  font-size: 25px;
  border-radius: 0px;
  border: none;
  padding: 35px 50px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff4b3a;

  &:hover {
    background-color: #de3e2f;
  }
`;

const Blog = styled.button`
  color: whitesmoke;
  font-size: 25px;
  border-radius: 0px;
  border: none;
  padding: 35px 50px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eaa900;
  &:hover {
    background-color: #bf8b04;
  }
`;

const TextXD = styled.div`
  font-size: 5px;
`;
