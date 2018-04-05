import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './Hoglist'
import Filter from './Filter'
import porkers_data from '../porkers_data.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      filter: {
        searchTerm: "",
        weight: 0,
        greased: "",
        nameSort: false,
        weightSort: false,
        sortedBy: ""
      }
    }
  }

  // defaultState = () => {
  //
  // }

  handleChange = (e) => {
    this.setState({
      filter: {
        ...this.state.filter,
        [e.target.name]: e.target.value
      }
    }, () => console.log(this.state))
  }

  handleCheck = (e) => {
    if (this.state.filter.greased === "") {
      this.setState({
        filter: {
          ...this.state.filter,
          greased: true
        }
      })
    } else {
      this.setState({
        filter: {
          ...this.state.filter,
          greased: !this.state.filter.greased
        }
      })
    }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   debugger
  //   // this.handleChange()
  //   // this.handleCheck()
  //   console.log(this.state.filter)
  //   this.filteredList()
  // }

  filteredList = (nameOrWeight) => {
    const filteredHogs = porkers_data.filter(porker => {
      return porker.name.toLowerCase().includes(this.state.filter.searchTerm.toLowerCase())
    })
    .filter(hog => {
      return hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] >= this.state.filter.weight
    })
    .filter( hog => {
      return (this.state.filter.greased === "") ? hog : hog.greased === this.state.filter.greased
    })

    if (this.state.filter.sortedBy === "name") {
      return this.sortByName(filteredHogs)
    } else if (this.state.filter.sortedBy === "weight") {
      return filteredHogs.sort( (a, b) => a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
    } else {
      return filteredHogs
    }
  }

  sortByName = (arr) => {
    return arr.sort((a, b) => {
      let nameA =  a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      return (nameA < nameB) ? -1 : 1;
    })
  }

  sortNames = (e) => {
    e.preventDefault()
    console.log(e)

    this.setState({
      filter: {
        ...this.state.filter,
        sortedBy: "name"
      }
    })
  }

  sortWeights = (e) => {
    e.preventDefault()
    console.log(e)

    this.setState({
      filter: {
        ...this.state.filter,
        sortedBy: "weight"
      }
    })
  }

  showAll = (e) => {
    let arr = document.getElementsByClassName('ui card')
    console.log(arr)
    for(let i = 0; i < arr.length ; i ++) {
      arr[i].style.display = "block"
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter handleChange={this.handleChange} handleCheck={this.handleCheck} filter={this.state.filter} sortNames={this.sortNames} sortWeights={this.sortWeights} showAll={this.showAll}/>
        <HogList filteredList={this.filteredList}/>
      </div>
    )
  }
}

export default App;
