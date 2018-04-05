import React from 'react'
import HogTile from './Hogtiles'
// import porkers_data from '../porkers_data.js'

export default class HogList extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //
  //   }
  // }

  // filteredList = () => {
  //   const filteredNames = porkers_data.map(porker => {
  //     return porker.name.toLowerCase() === this.props.filter.searchTerm.toLowerCase()
  //   })
  //   console.log(filteredNames)
  // }

  hogtiles = () => this.props.filteredList().map( porker => <HogTile porker={porker} showDetail={this.showDetail}/>)

  render() {
    return (
      <div className="ui grid container">
        {this.hogtiles()}
      </div>
    )
  }
}
