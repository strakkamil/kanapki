import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link as ScrollLink } from 'react-scroll'
import './menu.css'
import LogoDark from '../../images/logo-dark.jpg'

const vh = Math.round(window.innerHeight / 100)

const Menu = (props) => {
  return (
    <div className={props.menuIsOpen ? 'menu active' : 'menu'}>
      <div className="left-close" onClick={props.handleBurgerOnClick}>
        <CloseIcon
          fontSize='large'
          style={{ color: '#F12B81', cursor: 'pointer' }}
        />
      </div>
      <section className="left">
        <div>
          <ScrollLink to='sandwiches' smooth={true} duration={400} delay={600} offset={-(10 * vh)}>
            <span onClick={props.handleBurgerOnClick}>Kanapki</span>
          </ScrollLink>
        </div>
        <div>
          <ScrollLink to='main-places' smooth={true} duration={400} delay={600} offset={-(10 * vh)}>
            <span onClick={props.handleBurgerOnClick}>Punkty firmowe</span>
          </ScrollLink>
        </div>
        <div>
          <span>
            <a href='tel:792 674 777'>792 674 777</a>
          </span>
        </div>
        <div>
          <span>
            <a href='mailto:kanapkarniaradom@op.pl'>kanapkarniaradom@op.pl</a>
          </span>
        </div>
        <div>
          <div className="socials">
            <img src={LogoDark} alt="logo" />
            <div className='social'>
              <span className='quality'>Gwarancja jakości</span>
              <span className='social-span'>Dołącz do nas</span>
              <span className='icon'>
                <FacebookIcon
                  style={{
                    color: '#F12B81',
                    cursor: 'pointer'
                  }}
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
    </div >
  )
}

export default Menu