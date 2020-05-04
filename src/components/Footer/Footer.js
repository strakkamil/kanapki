import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import './footer.css'

const year = new Date(Date.now()).getFullYear()

const Footer = (props) => {
  return (
    <footer>
      <div className='footer-socials'>
        <div className='footer-socials-info'>
          <span>Gwarancja jakości</span>
          <span>Dołącz do nas</span>
          <span className='icon'>
            <FacebookIcon
              style={{
                color: '#F12B81',
                cursor: 'pointer'
              }}
              onClick={props.handleOpenFacebook}
              fontSize='large'
            />
          </span>
        </div>
      </div>
      <div className='company-info'>
        <div className="company">
          <p>
            &copy; {year} Kanapkarnia. Wszystkie prawa zastrzeżone. | <span>Polityka prywatności</span>
          </p>
        </div>
        <div className="author">
          <p>Stworzona przez <a href="tel:660442826">Kamil Strąk</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer