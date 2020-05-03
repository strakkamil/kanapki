import React from 'react'

const Place = (props) => {
  return (
    <div onClick={() => props.handleOpenPlaceMap(props.link)}>
      <span>{props.city}</span>
      <span>{props.address}</span>
      <span>{props.conjunction}</span>
      <span>{props.place}</span>
    </div>
  )
}

export default Place