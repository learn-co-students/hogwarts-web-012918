import React from 'react'

export default class HogCard extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      hog: props.hog,
      showDetails: false
    }
  }

  toggleDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({
        showDetails: true
      })
    } else {
      this.setState({
        showDetails: false
      })
    }
  }



  // const hog = this.state.hog


  showStuff = () =>{
      return(<div>
      <div>Specialty: {this.state.hog.specialty}</div>
      <div>Greased: {this.state.hog.greased.toString()}</div>
      <div>{this.state.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</div>
      <div>{this.state.hog['highest medal achieved']}</div></div>)

    }




    render() {
      return (
        <div className="ui eight wide column">
          <div className='ui link cards'>
            <div className='card'>
              <h3>{this.state.hog.name}</h3>
              <img onClick={this.toggleDetails} src={require(`../hog-imgs/${this.state.hog.name.split(' ').join('_').toLowerCase()}.jpg`)}/>
                  {this.state.showDetails ? this.showStuff() : null}
            </div>
          </div>

        </div>
      )
    }





}
