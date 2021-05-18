import React, { Component } from "react";

class NavigationBar extends Component {
  state = {
    blogName: "Alesha",
  };
  render() {
    return (
      <div className="navbar">
        <h1 style={{ textAlign: "center" }}>{this.state.blogName}</h1>
      </div>
    );
  }
}

export default NavigationBar;
