import React from 'react'

export default class Filter extends React.Component {
  // sortNames = name => this.props.sortNames(e.target.name)
  //
  // sortWeights = weight => this.props.sortWeights(e.target.name)

  render() {
    return (
      <div>
        <form className="ui form">
          <label/>Name:
          <input name="searchTerm" onChange={this.props.handleChange} type="text" value={this.props.filter.searchTerm}></input>
          <br/><br/>

          <label/>Weight:
          <input type="number" placeholder="0.0" step="0.2" min="0" max="4" name="weight" onChange={this.props.handleChange}/>
          <br/><br/>

          <label/>Greased: 
          <input name="greased" type="radio" checked={this.props.filter.greased} onClick={this.props.handleCheck}></input>
          <br/><br/>
        </form>
        <div>
          <button className="ui primary button" name="sort-by-name" onClick={this.props.sortNames}>Sort by name</button>
          <button className="ui primary button" name="sort-by-weight" onClick={this.props.sortWeights}>Sort by weight</button>
          <button className="ui primary button" name="show-all" onClick={this.props.showAll}>Peek-A-Boo!</button>
        </div>
        <br/>
      </div>
    )
  }
}
