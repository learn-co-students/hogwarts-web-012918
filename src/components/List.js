import React from 'react'
import hogs from '../porkers_data'
import Pig from './Pig'
import UUID from 'uuid'
class List extends React.Component {


  // getHogImg = (hogName) =>{
  //
  //   return hogName.toLowerCase().replace(/ /g,"_")
  // }
  //
  // handleClick = (e) => {
  //
  //   let hogIndex = this.state.hogs.findIndex((hog) => hog.id === e.target.parentNode.id)
  //   let ourHog = this.state.hogs[hogIndex]
  //   let newArr = [...this.state.hogs]
  //   newArr[hogIndex] = Object.assign(ourHog, {'visibleDeets': !ourHog['visibleDeets'] })
  //   console.log(newArr[hogIndex])
  //   this.setState({
  //     hogs: newArr
  //   })
  // }


  render(){
    return(
      <ul className='ui grid container'>{this.props.hogs.map(hog => {
        return <Pig hog={hog} getHogImg={this.props.getHogImg} handleClick={this.props.handleClick}/>
      })}</ul>
    )
  }
}

export default List
