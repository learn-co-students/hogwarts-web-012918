import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import Filter from './Filter'

class App extends Component {
  constructor() {
    super()

    this.state = {
      greasedFilter: false,
      nameSort: false,
      weightSort: false
    }
  }

  changeGreasedFilter = () => {
    this.setState({
      greasedFilter: !this.state.greasedFilter
    })
  }

  changeNameSort = () => {
    this.setState({
      nameSort: !this.state.nameSort,
      weightSort: false
    })
  }

  changeWeightSort = () => {
    this.setState({
      weightSort: !this.state.weightSort,
      nameSort: false
    })
  }


  render() {
    return (
      <div className="App">
          < Nav />
          < Filter
            greasedFilter={this.changeGreasedFilter}
            weightSort={this.changeWeightSort}
            nameSort={this.changeNameSort}/>
          < HogList filterSort={this.state}/>

      </div>
    )
  }
}

export default App;
