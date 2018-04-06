import React from 'react'
import AllHogData from '../porkers_data'
import Hog from './Hog'

let dataToDisplay = false

export default class HogList extends React.Component {


  sortHogs = (filterSort) => {
    const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
    if(filterSort.nameSort) {
      return AllHogData.sort((hogA, hogB) => {
        return hogA.name.localeCompare(hogB.name)

      })
    } else if (filterSort.weightSort) {
      return AllHogData.sort((hogA, hogB) => {
        return hogA[weight] - hogB[weight]

      })
    }
  }

  filterHogs = (filterSort) => {
    if (filterSort.greasedFilter) {
      dataToDisplay =
      [...AllHogData].filter(hog => {
        return hog.greased
      })
    } else {
      dataToDisplay = [...AllHogData]
    }
    // return dataToDisplay
  }


  getAllHogNames = () => {
    return dataToDisplay.map((hog, index) => {
      return(<div className="ui eight wide column" key={index+1}><Hog
        hogData={hog}
        id={index + 1}
      /></div>)
    })
  }

  render() {
    this.sortHogs(this.props.filterSort)
    this.filterHogs(this.props.filterSort)
    return (
      <div className="ui grid container">

        {this.getAllHogNames()}

      </div>
    )
  }
}
