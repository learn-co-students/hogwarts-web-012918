import React from 'react';
import Hogs from './Hogs'
import hogs from '../porkers_data';


class HogContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      value: 'all'
    }
  }

  greasedPigs = hogs.slice().filter( hog => hog.greased === true)

  alphabetizedPigs = () => {
      return hogs.slice().sort(function (a, b) {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      });
    }

  orderedByWeight = () => {
    return hogs.slice().sort(function (a, b) {
      const weightRatio = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      return a[weightRatio] - b[weightRatio];
    });
  }

  change = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  choosingHogs = () => {
    if (this.state.value === 'all') {
      return hogs
    } else if (this.state.value === 'name') {
      return this.alphabetizedPigs()
    } else if (this.state.value === 'weight') {
      return this.orderedByWeight()
    } else if (this.state.value === 'greased') {
      return this.greasedPigs
    }
  }

  render(){
    return (
      <div>
        Show and/or Organize by:
        <select id="organize-hogs" onChange={this.change} value={this.state.value}>
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="greased">Greased</option>
        </select><p> </p><p> </p>
        <div className='ui grid container'>
          {this.choosingHogs().map(hog => (
            <Hogs key={hog.name} hogData={hog}/>
          ) )}
          <i><footer><p>*Weight Ratio = weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water</p></footer></i>
        </div>
      </div>
    )
  }

}

export default HogContainer
