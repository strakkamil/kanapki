import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import './menu.css'
import LogoDark from '../../images/logo-dark.jpg'

const Menu = (props) => {
  return (
    <div className={props.menuIsOpen ? 'menu active' : 'menu'}>
      <section className="left">
        <div>
          <span>Kanapki</span>
        </div>
        <div>
          <span>Oferta</span>
        </div>
        <div>
          <span>792 674 777</span>
        </div>
        <div>
          <span>kanapkarniaradom@op.pl</span>
        </div>
        <div>
          <div className="socials">
            <img src={LogoDark} alt="logo" />
            <div className='social'>
              <span className='quality'>Gwarancja jakości</span>
              <span className='social-span'>Dołącz do nas</span>
              <span className='icon'>
                <FacebookIcon
                  style={{ color: '#F12B81' }}
                  onClick={props.handleOpenFacebook}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="right">
        <div className="close" onClick={props.handleBurgerOnClick}>
          <span>Zwiń</span>
          <CloseIcon
            fontSize='large'
            style={{ color: '#F12B81', cursor: 'pointer' }}
          />
        </div>
        <div className='map'></div>
        <span className='open-maps' onClick={props.handleOpenMap}>Przejdz do map</span>
      </section>
    </div>
  )
}

export default Menu