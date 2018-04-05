import React from 'react'
const FilterForm = (props) => {
  return (<form>
    <button onClick={props.sortByName}>Sort By Name</button>
    <button onClick={props.sortByWeight}>Sort By Weight</button>
    <button onClick={props.filterByGreased}>Filter By Greased</button>
  </form>)
}

export default FilterForm
