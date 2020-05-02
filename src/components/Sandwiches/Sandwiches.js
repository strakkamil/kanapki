import React from 'react'
import './sandwiches.css'
import foto from '../../images/history-photo.jpg'

const Sandwiches = (props) => {
  return (
    <section className="sandwiches">
      <div className="background"></div>
      <h3>Przejrzyj kanapkową ofertę</h3>
      <div className='sandwiches-info'>
        <div className="sandwich">
          <div className="front">
            <div className='sandwich-image' style={{ backgroundImage: `url(${foto})` }}></div>
            <span className='name'>szynka</span>
            <span className='additives'>składniki są z tyłu</span>
          </div>
          <div className="back">
            <ul>
              <li>pieczywo razowe</li>
              <li>szynka</li>
              <li>pomidor</li>
              <li>ogórek</li>
              <li>sałata</li>
              <li>ketchup</li>
            </ul>
          </div>
        </div>
        <div className="sandwich">
          <div className="front">
            <div className='sandwich-image' style={{ backgroundImage: `url(${foto})` }}></div>
            <span className='name'>szynka</span>
            <span className='additives'>składniki są z tyłu</span>
          </div>
          <div className="back">
            <ul>
              <li>pieczywo razowe</li>
              <li>szynka</li>
              <li>pomidor</li>
              <li>ogórek</li>
              <li>sałata</li>
              <li>ketchup</li>
            </ul>
          </div>
        </div>
        <div className="sandwich">
          <div className="front">
            <div className='sandwich-image' style={{ backgroundImage: `url(${foto})` }}></div>
            <span className='name'>szynka</span>
            <span className='additives'>składniki są z tyłu</span>
          </div>
          <div className="back">
            <ul>
              <li>pieczywo razowe</li>
              <li>szynka</li>
              <li>pomidor</li>
              <li>ogórek</li>
              <li>sałata</li>
              <li>ketchup</li>
            </ul>
          </div>
        </div>
        <div className="sandwich">
          <div className="front">
            <div className='sandwich-image' style={{ backgroundImage: `url(${foto})` }}></div>
            <span className='name'>szynka</span>
            <span className='additives'>składniki są z tyłu</span>
          </div>
          <div className="back">
            <ul>
              <li>pieczywo razowe</li>
              <li>szynka</li>
              <li>pomidor</li>
              <li>ogórek</li>
              <li>sałata</li>
              <li>ketchup</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sandwiches