import React from 'react'
import './hero.css'
import hero1 from '../../images/hero1.jpg'
import hero2 from '../../images/hero2.jpg'

const tags = ['zdrowe.', 'smaczne.', 'świeże.']

const Hero = (props) => {
  const spanTags = tags.map(tag => <span key={tag}>{tag}</span>)
  return (
    <div className='hero'>
      <div className="image" style={
        {
          backgroundImage:
            `url(${props.image === 'hero1' ? hero1 :
              hero2})`
        }
      }>
        <div className="animation">
          <div className="filter">
            <h1>#Kanapkarnia</h1>
            <div className="tags">
              {spanTags}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero