import React from 'react'
import Burger from '../Burger/Burger'
import Logo from '../Logo/Logo'
import NavOrderSpan from '../NavOrderSpan/NavOrderSpan'
import './nav.css'

const Nav = (props) => {
  return (
    <nav className={props.scrollYPosition && 'scrolled'}>
      <div className="wrapper">
        <Burger
          menuIsOpen={props.menuIsOpen}
          handleBurgerOnClick={props.handleBurgerOnClick}
        />
        <Logo
          handleBackToTop={props.handleBackToTop}
        />
        <NavOrderSpan />
      </div>
    </nav>
  )
}

export default Nav