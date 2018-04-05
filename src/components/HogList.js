import React from 'react'
import HogCard from './HogCard'


export default class HogList extends React.Component{
constructor(props){
  super(props)
    this.state = {
      hogs: props.hogsData,
      filtered: 'all'
  }
}

  handleFilterValue = (event) => {
    event.preventDefault()
    let currentValue= event.target.value
    this.setState({
      filtered: currentValue
    })
  }

  filterHogs = () => {
    if (this.state.filtered === 'all') {
      return this.state.hogs.map((hog) => <HogCard hog={hog} key={hog.name}/>)
    } else if(this.state.filtered === 'name') {
        return this.state.hogs.sort((a, b) => ( a.name < b.name )?-1:1).map((hog) => <HogCard hog={hog} key={hog.name}/>)
      } else if(this.state.filtered === 'weight') {
          let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
          return this.state.hogs.sort((a, b) => ( a[weight] - b[weight] )).map((hog) => <HogCard hog={hog} key={hog.name}/>)
        } else {
          return this.state.hogs.filter((hog) => hog.greased === true).map((hog) => <HogCard hog={hog} key={hog.name}/>)
        }
    }



  render(){
  return(
    <div>

      <div>
        <select value={this.props.filtered} onChange={this.handleFilterValue}>
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="greased">Greased</option>
        </select>
      </div>
      <p> </p>
      <div className="ui grid container">
        {this.filterHogs()}
      </div>

    </div>
  )
  }





}
