import React from "react";

class ColorButton extends React.Component {
  render() {
    return (
      <div>
        <button class="btn home">HOME</button>
        <button class="btn resume">INFO</button>
        <button class="btn portfolio">PORTFOLIO</button>
        <button class="btn contacts">CONTACTS</button>
        <button class="btn feedback">FEEDBACK</button>
        <button class="btn Blog">BLOG</button>
      </div>
    );
  }
}

export default ColorButton;
