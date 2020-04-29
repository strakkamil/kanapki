import React from 'react'
import './burger.css'

const Burger = (props) => {
  return (
    <div className='burger' onClick={props.handleBurgerOnClick}>
      <span className={props.menuIsOpen ? 'active' : 'deactive'}></span>
      <span className={props.menuIsOpen ? 'active' : 'deactive'}></span>
      <span className={props.menuIsOpen ? 'active' : 'deactive'}></span>
    </div>
  )
}

export default Burger