import React from 'react'

export default class Hog extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      showInfo: false,
    }
  }

  showHogInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render() {
    const imageName = this.props.hogData.name.replace(/\s/g,'_').toLowerCase()
    const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
    const medal = "highest medal achieved"
    let hogData =
          <ul>
            <li>Specialty: {this.props.hogData.specialty}</li>
            <li>Greased: {this.props.hogData.greased.toString()}</li>
            <li>Weight: {this.props.hogData[weight]}</li>
            <li>Highest Medal Achieved: {this.props.hogData[medal]}</li>
          </ul>

    return (
      <div id={this.props.id.key} onClick={this.showHogInfo}>
        <img
          src={require(`../hog-imgs/${imageName}.jpg`)}
          alt=""
        />
        <h3>{this.props.hogData.name}</h3>
        <div>
            {this.state.showInfo ? hogData : null }
        </div>
      </div>
    )
  }

}
