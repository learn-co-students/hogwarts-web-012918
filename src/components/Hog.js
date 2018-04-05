import React from 'react'


class Hog extends React.Component{

  render(){
    return(
      <div className="ui eight wide column">
        <img src={require(`../hog-imgs/${this.props.name.toLowerCase().split(" ").join("_")}.jpg`)} />
        <p>Name: {this.props.name}</p>
        <p>Specialty: {this.props.specialty}</p>
        <p>Greased: {this.props.greased ? "yes" : "no"}</p>
        <p>Weight: {this.props.weight}</p>
        <p>Highest Medal: {this.props.highestMedal}</p>
      </div>
    )
  }
}

export default Hog
