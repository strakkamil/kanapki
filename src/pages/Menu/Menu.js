import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import './menu.css'

const Menu = (props) => {
  return (
    <div className={props.menuIsOpen ? 'menu active' : 'menu'}>
      <section className="left">

      </section>
      <section className="right">
        <div className="close" onClick={props.handleBurgerOnClick}>
          <span>Zwiń</span>
          <CloseIcon
            fontSize='large'
            style={{ color: '#F12B81' }}
          />
        </div>
        <div className='map'></div>
        <span className='open-maps' onClick={props.handleOpenMap}>Przejdz do map</span>
      </section>
    </div>
  )
}

export default Menu