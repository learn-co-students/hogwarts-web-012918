import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigsList from './PigsList'
import Pig from './Pig'
import Hogs from '../porkers_data.js'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      allHogs: Hogs
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <PigsList all_pigs={this.state.allHogs} />
      </div>
    )
  }
}

export default App;
