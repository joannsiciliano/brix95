import React, { Component } from "react";
import WeedCard from "./WeedCard";
import { Link } from 'react-router-dom';

export default class Strains extends Component {

  state = {
    strains: [],
  };
  componentDidMount() {
    fetch("http://localhost:3000/strains")
      .then((response) => response.json())
      .then((data) => this.setState({ strains: data }));
  }

  
  // showStrain(){
    //   console.log("HIT!")
    // }
    
    displayStrains = () => {
      return this.state.strains.map((strain) => {
        return (
          <Link to={`/strains/${strain.id}`}>
            <WeedCard
            strains={this.state.strains}
            key={strain.id}
            weed={strain}
            />
          </Link>
          );
        });
      };
      
      handleClick = () => {
        console.log("HELLO")
        // fetch(`http://localhost:3000/strains/${weed.id}`, {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({
        //     strain: {
        //       id: weed.id
        //     },
        //   }),
        // })
        //   .then(response => response.json())
        //   .then(strain => console.log(strain))
      }
      // onClick={() => this.props.handleClick()}
      
      render() {
        return <div className="Strains">{this.displayStrains()}</div>;
      }
    }
