import React from 'react'
import './burger.css'

const Burger = (props) => {
  return (
    <div className='burger' onClick={props.handleBurgerOnClick}>
      <div className="wrapper">
        <span className={props.menuIsOpen ? 'active' : 'deactive'}></span>
        <span className={props.menuIsOpen ? 'active' : 'deactive'}></span>
        <span className={props.menuIsOpen ? 'active' : 'deactive'}></span>
      </div>
    </div>
  )
}

export default Burger