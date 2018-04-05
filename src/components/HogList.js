import React from 'react'
import AllHogData from '../porkers_data'
import Hog from './Hog'

export default class HogList extends React.Component {


  getAllHogNames = () => {
    return AllHogData.map((hog, index) => {
      return(<div className="ui eight wide column" key={index+1}><Hog
        hogData={hog}
        id={index + 1}
      /></div>)
    })
  }

  render() {

    return (
      <div className="ui grid container">

        {this.getAllHogNames()}

      </div>
    )
  }
}
