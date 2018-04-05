import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import List from './List'
import hogs from '../porkers_data'
import FilterForm from './FilterForm'
import UUID from 'uuid'
class App extends Component {
  obj = {
    hogs: hogs.map(hog => Object.assign(hog, {'visibleDeets': false, id: UUID()}))

  }
  constructor(){
    super();
    this.state = this.obj
  }



  getHogImg = (hogName) =>{

    return hogName.toLowerCase().replace(/ /g,"_")
  }

  handleClick = (e) => {

    let hogIndex = this.state.hogs.findIndex((hog) => hog.id === e.target.parentNode.id)
    let ourHog = this.state.hogs[hogIndex]
    let newArr = [...this.state.hogs]
    newArr[hogIndex] = Object.assign(ourHog, {'visibleDeets': !ourHog['visibleDeets'] })
    console.log(newArr[hogIndex])
    this.setState({
      hogs: newArr
    })
  }

  sortByName = (e) => {
    e.preventDefault()

    console.log('im sorting by name')
    this.setState({
      hogs: this.obj.hogs.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
   }
        else if (a.name > b.name) {
          return 1;
   }
    // (a.name < b.name) ? return -1 : return 1
   // a must be equal to b
         return 0;
      })
    })
  }

  sortByWeight = (e) => {
    e.preventDefault()
    let weightKey = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    console.log('im sorting by weight')
    this.setState({
      hogs: this.obj.hogs.sort((a, b) => {
        if (a[weightKey] < b[weightKey]) {
          return -1;
   }
        else if (a[weightKey] > b[weightKey]) {
          return 1;
   }
    // (a.name < b.name) ? return -1 : return 1
   // a must be equal to b
         return 0;
      })
    })
  }


  filterByGreased = (e) => {
    e.preventDefault()
    console.log('im sorting by greased')
    let greasyArr = this.state.hogs.filter(hog => {
      return hog.greased
    })
    this.setState({
      hogs: greasyArr
    })
    // console.log(greasyArr)

  }

  render() {
    return (
      <div className="App">
          < Nav />
          <FilterForm sortByName={this.sortByName} sortByWeight={this.sortByWeight} filterByGreased={this.filterByGreased}/>
          <h2>-----------------------</h2>
          <List handleClick={this.handleClick} getHogImg={this.getHogImg} hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
