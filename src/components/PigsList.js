import React, { Component } from 'react';
import Pig from './Pig'

class PigsList extends React.Component {


  render(){
    const renderPigs = this.props.all_pigs.map(pig =>
      <Pig
      img={pig.img}
      name={pig.name}
      specialty={pig.specialty}
      greased={pig.greased}
      weight={pig.weight}
      medal={pig.medal}
      />)

    return(
      <div>
      {renderPigs}
      </div>
    )
  }

}

export default PigsList;
