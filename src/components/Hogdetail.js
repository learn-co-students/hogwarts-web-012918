import React from 'react'

const HogDetail = (props) => {
  return (
    <div>
      <p><strong>Specialty: </strong> {props.porker.specialty}</p>
      <p><strong>Greased:  </strong>{(props.porker.greased) ? "SO GREASY" : "not very greased" }</p>
      <p><strong>Highest Medal Achieved: <br/> </strong>{props.porker["highest medal achieved"]}</p>
      <p><strong>Weight as a Ratio of Hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: <br/> </strong>{props.porker["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
    </div>
  )
}

export default HogDetail
