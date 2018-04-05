import React from "react";

const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
const medal = "highest medal achieved"

class Filter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weightSort: false,
      nameSort: false,
      greasedFilter: false
    }
  }

  sortByWeight = () => {
    const originalArray = [...this.props.hogsList]

    if (this.state.weightSort) {
      let weightArray = originalArray.sort((a, b) => {return b[weight]-a[weight]})
      return weightArray
    }else {
      return originalArray
    }
  }

  sortByName = () => {
    const originalArray = [...this.props.hogsList]

    if (this.state.nameSort) {
      let nameArray = originalArray.sort((a, b) => {return a.name.localeCompare(b.name)})
      return nameArray
    }else {
      return originalArray
    }
  }

  handleClick = (event) => {
    const name = event.target.name
    this.setState({
      [name]: !this.state[name]
    },()=>{
      name === "weightSort" ? this.props.filterFunction(this.sortByWeight()) : this.props.filterFunction(this.sortByName())
    })
  }

  handleChange = (event) => {
    const originalArray = [...this.props.hogsList]

    if(event.target.value === "all") {
      this.props.filterFunction(originalArray)
    } else if (event.target.value === "grease"){
      let greaseFilter = originalArray.filter(hog => {return hog.greased})
      this.props.filterFunction(greaseFilter)
    } else if (event.target.value === "clean") {
      let cleanFilter = originalArray.filter(hog => {return !hog.greased})
      this.props.filterFunction(cleanFilter)
    }
  }

  render() {
    return (
      <div>
        <button name="nameSort" onClick={this.handleClick}>Sort By Name</button>
        <button name="weightSort" onClick={this.handleClick}>Sort By Weight</button>

        <select onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="grease">Greasy</option>
          <option value="clean">Clean</option>
        </select>
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default Filter
