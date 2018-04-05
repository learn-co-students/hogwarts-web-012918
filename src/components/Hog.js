import React from 'react'

export default class Hog extends React.Component {

  render() {

    const imageName = this.props.hogData.name.replace(/\s/g,'_').toLowerCase()
    console.log(this.props)
    console.log(this.props.key)

    return (
      <div id={this.props.id.key}>
        <img
          src={require(`../hog-imgs/${imageName}.jpg`)}
          alt=""
        />
        <h3>{this.props.hogData.name}</h3>
      </div>
    )
  }

}

{
  name: 'Porkchop',
  specialty: 'Making friends',
  greased: true,
  'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 1.6,
  'highest medal achieved': 'silver'
},
