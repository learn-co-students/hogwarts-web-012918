import React from 'react'


class Hog extends React.Component{
  constructor() {
    super()

    this.state = {
      clicked: false
    }
  }

  hogChars = () => {
    return (
      <div>
        <h1> Name: {this.props.name}</h1>
        <p>Specialty: {this.props.specialty}</p>
        <p>Greased: {this.props.greased ? "yes" : "no"}</p>
        <p>Weight: {this.props.weight}</p>
        <p>Highest Medal: {this.props.highestMedal}</p>
      </div>
    )
  }


  handleClick = (event) => {
    this.setState({
      clicked: true
    })

    if (this.state.clicked) {
      this.setState({
        clicked: false
      })
    }
  }

  render(){
    return(
      <div className="ui eight wide column">
        <img onClick={this.handleClick} clicked={this.state.clicked}src={require(`../hog-imgs/${this.props.name.toLowerCase().split(" ").join("_")}.jpg`)} />

        {this.state.clicked === true ? this.hogChars() : null}

      </div>
    )
  }
}

export default Hog
