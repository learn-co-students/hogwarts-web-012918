import React from 'react';



export default class Pig extends React.Component {
  constructor() {
    super()
    this.state = {
      deets: false
    }
  }

  clickHandler = () => {
    this.setState({
      deets: !this.state.deets
    })
  }

  showDeets = () => {
    return (
      <div>
        <p>{this.props.specialty}</p>
        <p>{this.props.greased ? "greased" : "ungreased"}</p>
        <p>{this.props.weight}</p>
        <p>{this.props.medal}</p>
      </div>
    )
  }

  render() {
    let imgPath = ""
    if (this.props.name.indexOf(' ') !== -1) {
      imgPath = this.props.name.replace(/ /g, "_").toLowerCase()
    } else {
      imgPath = this.props.name.toLowerCase()
    }
    return (
      <div className="ui eight wide column" onClick={this.clickHandler}>
        <h1>{this.props.name}</h1>
        <img src={require(`../hog-imgs/${imgPath}.jpg`)} />
        {this.state.deets ? this.showDeets() : null}
      </div>
  )}

}
