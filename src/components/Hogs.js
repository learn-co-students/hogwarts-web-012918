import React from 'react';
// import hogs from '../porkers_data';


class Hogs extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showDetails: false
    }
  }

  imgName = this.props.hogData.name.toLowerCase().split(' ').join('_')
  image = require(`../hog-imgs/${this.imgName}.jpg`)
  weightRatio = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
  bestMedal = 'highest medal achieved'

  showDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    return (
      <div>
        <div className='ui eight wide column' onClick={this.showDetails}>
          <h3>{this.props.hogData.name}</h3>
          <img alt={this.props.hogData.name} src={this.image}></img>
        </div>
        {/* Show Details ternary */}
        {this.state.showDetails ? <div>
          <p>Specialty: {this.props.hogData.specialty}</p>
          <p>Greased? {this.props.hogData.greased ? 'Yes' : 'No'}</p>
          <p>*Weight Ratio: {this.props.hogData[this.weightRatio]}</p>
          <p>{this.bestMedal}: {this.props.hogData[this.bestMedal]}</p>
        </div> : null}
      </div>
    )
  }


}

export default Hogs
