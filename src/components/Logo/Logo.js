import React from 'react'
import { NavLink } from 'react-router-dom'
import './logo.css'
import logo from '../../images/logo.jpg'

const Logo = (props) => {
  return (
    <NavLink to='#' className='nav-logo' onClick={props.handleBackToTop}>
      <img src={logo} alt='logo' />
    </NavLink>
  )
}

export default Logo