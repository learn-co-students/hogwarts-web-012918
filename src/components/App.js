import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import Data from '../porkers_data.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogList data={Data}/>
      </div>
    )
  }
}

export default App;
