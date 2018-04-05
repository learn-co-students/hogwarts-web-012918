import React, {Component} from 'react'

const Pig = props => {

  const hogImg = props.getHogImg(props.hog.name)
  let weightKey = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
  let medal = 'highest medal achieved'
  return (
      <li id={props.hog.id} className='ui eight wide column' onClick={props.handleClick}><p>{props.hog.name} is my name.</p>
        <img src={require(`../hog-imgs/${hogImg}.jpg`)} />
        {props.hog.visibleDeets ? <div className='toggleDetails'>
          <p>{props.hog.specialty}</p>
          <p>{props.hog.greased ? "Is greased." : "Is not greased."}</p>
          <p>{props.hog[weightKey]}</p>
          <p>{props.hog[medal]}</p>
      </div> : null}
      </li>

      )
}

export default Pig
