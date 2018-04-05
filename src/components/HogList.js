import React from 'react'
import Hog from './Hog.js'
import Filter from './Filter.js'

const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
const medal = "highest medal achieved"


class HogList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hogsToShow: this.props.data
    }
  }

  filterFunction = (array) => {
    this.setState({
      hogsToShow: array
    })
  }

  render(){

    return(
      <div>
        < Filter hogsList={this.props.data} filterFunction={this.filterFunction} />
        <div className="ui grid container">
          {this.state.hogsToShow.map((hog)=>{return < Hog key={hog.name} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog[weight]} highestMedal={hog[medal]}/>})}
        </div>
      </div>
    )
  }
}

export default HogList
