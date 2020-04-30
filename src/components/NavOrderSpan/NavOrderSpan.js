import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav-order-span.css'

const NavOrderSpan = (props) => {
  return (
    <NavLink to='konakt' className='nav-span'>
      <span>Zamów teraz</span>
    </NavLink>
  )
}

export default NavOrderSpan