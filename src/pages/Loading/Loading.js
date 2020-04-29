import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './loading.css'
import logo from '../../images/logo.jpg'

const Loading = (props) => {
  return (
    <CSSTransition
      in={props.isLoading}
      timeout={1500}
      classNames={'loading'}
      unmountOnExit
    >
      <div className='loading'>
        <img src={logo} alt={logo} />
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Loading