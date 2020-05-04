import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Loading from './pages/Loading/Loading'
import Menu from './pages/Menu/Menu'
import Messenger from './components/Messenger/Messenger'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import InfoSection from './components/Info-section/InfoSection'
import History from './components/History/History'
import Sandwiches from './components/Sandwiches/Sandwiches'
import OrderNow from './components/OrderNow/OrderNow'
import MainPlaces from './components/MainPlaces/MainPlaces';
import Footer from './components/Footer/Footer'
import './App.css'

class App extends Component {
  state = {
    isLoading: true,
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
    disableBodyScroll(window)
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
      enableBodyScroll(window)
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
    }, 12000)
  }

  handleOpenMap = () => {
    window.open('https://www.google.com/maps/place/Plac+Corazziego/@51.4009817,21.1556939,17z/data=!3m1!4b1!4m5!3m4!1s0x47185fe2edfddc4b:0xf17fa83ca64af933!8m2!3d51.4009784!4d21.1578826?hl=pl')
  }

  handleOpenPlaceMap = (link) => {
    window.open(link)
  }

  handleOpenFacebook = () => {
    window.open('https://www.facebook.com/Kanapkarnia-100997474885965')
  }

  handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
          {!isLoading && <Messenger />}
          <Route
            path='/'
            exact
          >
            <Nav
              scrollYPosition={scrollYPosition}
              menuIsOpen={menuIsOpen}
              handleBurgerOnClick={this.handleBurgerOnClick}
              handleBackToTop={this.handleBackToTop}
            />

            <Hero
              image={heroImage}
            />
            <InfoSection
              handleOpenMap={this.handleOpenMap}
            />
            <History />
            <Sandwiches />
            <OrderNow />
            <h4>Punkty firmowe</h4>
            <MainPlaces
              handleOpenPlaceMap={this.handleOpenPlaceMap}
            />
            <Footer
              handleOpenFacebook={this.handleOpenFacebook}
            />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
