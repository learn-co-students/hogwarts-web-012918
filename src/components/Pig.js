import React, { Component } from 'react';
import App from './App'
import PigsList from './PigsList'


class Pig extends React.Component {

  constructor(){
    super();
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({clicked : !this.state.clicked})
  }

  render(){
  const pigImg = `${this.props.img}.jpg`

  if(!this.state.clicked){
    return(
      <div>
        <ul onClick={this.handleClick}>
          <img src={require(`../hog-imgs/${pigImg}`)}></img>
          <h3>{this.props.name}</h3>
      </ul>
      </div>
    )
  }else{
    return(
      <div>
        <ul onClick={this.handleClick}>
          <img src={require(`../hog-imgs/${pigImg}`)}></img>
          <h3>{this.props.name}</h3>
          <li>greased: {this.props.greased ? "yes" : "no"}</li>
          <li>specialty: {this.props.specialty}</li>
          <li>weight: {this.props.weight}</li>
          <li>medal: {this.props.medal}</li>
      </ul>
      </div>
    )
  }
}
}

export default Pig;
