import React from 'react'
import Place from './Place/Place'
import './main-places.css'

const mainPlaces = [
  {
    city: 'Radom',
    street: 'Kusocińskiego 8',
    conjunction: 'przy',
    place: 'II  L.O. im. M. Konopnickiej',
    link: 'https://www.google.com/maps/place/Janusza+Kusoci%C5%84skiego+8,+26-609+Radom/@51.4097875,21.1556631,18z/data=!3m1!4b1!4m5!3m4!1s0x47185ed47c8c0719:0xafcb22c42f2b4be5!8m2!3d51.4097861!4d21.1565833'
  },
  {
    city: 'Radom',
    street: 'Wernera 22',
    conjunction: 'przy',
    place: 'ZSE w Radomiu',
    link: 'https://www.google.com/maps/place/Wernera+22,+26-610+Radom/@51.411079,21.1352686,17z/data=!3m1!4b1!4m8!1m2!2m1!1sradom+wernera+22!3m4!1s0x4718592f64e3951d:0x554a2e7dd674e6a5!8m2!3d51.411077!4d21.13657'
  },
  {
    city: 'Radom',
    street: 'Mariacka 25',
    conjunction: 'przy',
    place: 'IV L.O. im dra T. Chałubińskiego',
    link: 'https://www.google.com/maps/place/Mariacka+25,+26-612+Radom/@51.3961211,21.1401374,17z/data=!3m1!4b1!4m8!1m2!2m1!1smariacka+25!3m4!1s0x47185ecaa52f2187:0xd26722373bf08e8a!8m2!3d51.3961178!4d21.1423261'
  }
]

const MainPlaces = (props) => {
  const places = mainPlaces.map(place => {
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
    <div className='main-places'>
      <div className="places">
        {places}
      </div>
    </div>
  )
}

export default MainPlaces