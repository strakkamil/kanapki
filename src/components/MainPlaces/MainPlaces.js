import React from 'react'
import Place from './Place/Place'
import './main-places.css'

const MainPlaces = (props) => {
  const places = props.mainPlaces.map(place => {
    return (
      <Place
        key={place.link}
        city={place.city}
        address={place.street}
        conjunction={place.conjunction}
        place={place.place}
        link={place.link}
        handleOpenPlaceMap={props.handleOpenPlaceMap}
      />
    )
  })
  return (
    < div className='main-places' >
      <h4>Punkty firmowe</h4>
      <div className="places">
        {places}
      </div>
    </div>
  )
}

export default MainPlaces