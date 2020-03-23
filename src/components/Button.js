import React from "react";
import styled from "styled-components";
import { FaBeer } from "react-icons/fa";
import Proptypes from "prop-types";

class Button extends React.Component {
  render() {
    const { text, icon: Icon, color } = this.props;
    return (
      <InnerButton backgroundColor={color}>
        <Icon />
        {text}
      </InnerButton>
    );
  }
}

Button.propTypes = {
  text: Proptypes.string,
  color: Proptypes.string,
  icons: Proptypes.node
};
export default Button;
