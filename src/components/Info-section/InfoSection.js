import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './info-section.css'

const checkHour = () => {
  const date = Date.now()
  const h = new Date(date).getHours()
  const day = new Date(date).getDay()
  if (day === 0 || day === 6) {
    return (
      <>
        <span>Otwieramy w poniedziałek o...</span>
        <span>8.00</span>
      </>
    )
  } else if (h >= 17 || h < 8) {
    return (
      <>
        <span>Otwieramy o...</span>
        <span>8.00</span>
      </>
    )
  } else {
    return (
      <>
        <span>Jesteśmy otwarci do...</span>
        <span>17.00</span>
      </>
    )
  }
}

const InfoSection = (props) => {
  return (
    <section className='info'>
      <div className="opening-hours">
        {checkHour()}
      </div>
      <div className="phone-email">
        <a href="tel:660442826">660442826</a>
        {/* 792 674 777 */}
        <a href="mailto:lumpekplumpek@gmail.com">lumpekplumpek@gmail.com</a>
      </div>
      <div className="address" onClick={props.handleOpenMap}>
        <LocationOnIcon
          fontSize='default'
        />
        <span>GoodVend Rajec Poduchowny 5a</span>
      </div>
    </section>
  )
}

export default InfoSection