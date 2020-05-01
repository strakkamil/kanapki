import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loading from './pages/Loading/Loading'
import Menu from './pages/Menu/Menu'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import InfoSection from './components/Info-section/InfoSection'
import './App.css'

class App extends Component {
  state = {
    // isLoading: true,
    scrollYPosition: 0,
    menuIsOpen: false,
    heroImage: 'hero1'
  }

  componentDidMount() {
    this.changeIsLoadingToFalse()
    window.addEventListener('scroll', this.checkScrollY)
    this.heroSlider()
  }

  changeIsLoadingToFalse = () => {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 3000)
  }

  checkScrollY = () => {
    const scrollYPosition = window.scrollY
    this.setState({
      scrollYPosition
    })
  }

  handleBurgerOnClick = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen
    })
  }

  heroSlider = () => {
    const hero = ['hero1', 'hero2', 'hero3']
    let i = 0
    setInterval(() => {
      i++
      if (i >= hero.length) {
        i = 0
      }
      this.setState({
        heroImage: hero[i]
      })
    }, 7000)
  }

  handleOpenMap = () => {
    window.open('https://www.google.com/maps/place/Plac+Corazziego/@51.4009817,21.1556939,17z/data=!3m1!4b1!4m5!3m4!1s0x47185fe2edfddc4b:0xf17fa83ca64af933!8m2!3d51.4009784!4d21.1578826?hl=pl')
  }

  handleOpenFacebook = () => {
    window.open('https://www.facebook.com/Kanapkarnia-100997474885965')
  }

  render() {
    const { isLoading, scrollYPosition, menuIsOpen, heroImage } = this.state
    return (
      <Router>
        <div className='app'>
          <Loading
            isLoading={isLoading}
          />
          <Menu
            menuIsOpen={menuIsOpen}
            handleBurgerOnClick={this.handleBurgerOnClick}
            handleOpenMap={this.handleOpenMap}
            handleOpenFacebook={this.handleOpenFacebook}
          />
          <Nav
            scrollYPosition={scrollYPosition}
            menuIsOpen={menuIsOpen}
            handleBurgerOnClick={this.handleBurgerOnClick}
          />
          <Route
            path='/'
            exact
          >
            <Hero
              image={heroImage}
            />
            <InfoSection
              handleOpenMap={this.handleOpenMap}
            />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
