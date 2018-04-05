import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import hogsData from '../porkers_data'

// import hogCard from './hog'



class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <HogList hogsData={hogsData}/>
      </div>
    )
  }
}

export default App;
