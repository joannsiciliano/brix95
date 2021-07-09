import React, { Component } from "react";
import WeedCard from "./WeedCard";
export default class Strains extends Component {
  state = {
    strains: [],
  };
  componentDidMount() {
    fetch("http://localhost:3000/strains")
      .then((response) => response.json())
      .then((data) => this.setState({ strains: data }));
  }

  displayStrains = () => {
    return this.state.strains.map((strain) => {
      return (
        <WeedCard
          strains={this.state.strains}
          key={this.state.strains.id}
          weed={strain}
        />
      );
    });
  };

  render() {
    return <div className="Strains">{this.displayStrains()}</div>;
  }
}
