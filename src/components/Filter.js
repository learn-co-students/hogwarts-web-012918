import React from 'react';

export default class Filter extends React.Component{

  handleGreaseClick = () => {
    this.props.greasedFilter()
  }

  handleNameClick = () => {
    this.props.nameSort()

  }

  handleWeightClick = () => {
    this.props.weightSort()

  }
  render() {

    return(
      <div>
        <div>
          <button
            type="button"
            onClick={this.handleGreaseClick}>Filter Greased Hogs
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={this.handleNameClick}>Sort by Name
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={this.handleWeightClick}>Sort by Weight
          </button>
        </div><br/><br/><br/><br/>
      </div>
    )
  }
}
