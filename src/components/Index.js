import React from 'react';
import Pig from "./Pig.js"
import hogs from "../porkers_data.js"

export default class Index extends React.Component {

  constructor() {
    super()
    this.state = {
      sortBy: "sortByOrig",
      filterByGreased: false
    }
  }

  createPigs = () => {
    let weightVar = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    let hogList = [...hogs];

    if (this.state.sortBy === "sortByOrig") {
      if (this.state.filterByGreased) {
        hogList = this.filterPigs(hogList)
      }
      return hogList.map((hog) => {
        return <Pig name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog[weightVar]} medal={hog['highest medal achieved']}/>
      })
    } else if (this.state.sortBy === "sortByName") {
      if (this.state.filterByGreased) {
        hogList = this.filterPigs(hogList)
      }
      let sortedbyNameHogs = hogList.sort((a,b) => { return a.name.localeCompare(b.name)})
      return sortedbyNameHogs.map((hog) => {
        return <Pig name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog[weightVar]} medal={hog['highest medal achieved']}/>
      })
    } else if (this.state.sortBy === "sortByWeight"){
      if (this.state.filterByGreased) {
        hogList = this.filterPigs(hogList)
      }
      let sortedbyWeightHogs = hogList.sort((a,b) => { return a[weightVar] - b[weightVar]})
      return sortedbyWeightHogs.map((hog) => {
        return <Pig name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog[weightVar]} medal={hog['highest medal achieved']}/>
      })
    }
  }

  checkDropdown = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  greaseCheckbox = () => {
    this.setState({
      filterByGreased: !this.state.filterByGreased
    })
  }

  filterPigs = (hogsList) => {
    return hogsList.filter((hog) => {
      return hog.greased
    })
  }

  render() {
    return (
      <div>
        <select onChange={this.checkDropdown}>
          <option value='sortByOrig'>Unsorted List</option>
          <option value='sortByName'>Sort By Name</option>
          <option value='sortByWeight'>Sort By Weight</option>
        </select>
        <p></p>
        <input id='filterByGreased' type='checkbox' onClick={this.greaseCheckbox}/>
        <label for='filterByGreased'>Filter By Greased</label>
        <p></p>
        <div className="ui grid container">
          {this.createPigs()}
        </div>
      </div>
  )}
}
