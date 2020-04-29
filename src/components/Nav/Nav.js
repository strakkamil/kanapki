import React from 'react'
import Burger from '../Burger/Burger'
import './nav.css'

const Nav = (props) => {
  return (
    <nav className={props.scrollYPosition && 'scrolled'}>
      <Burger
        menuIsOpen={props.menuIsOpen}
        handleBurgerOnClick={props.handleBurgerOnClick}
      />
    </nav>
  )
}

export default Nav