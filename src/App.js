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
import './App.css'


class App extends Component {
  state = {
    isLoading: true,
    scrollYPosition: 0,
    menuIsOpen: false,
    heroImage: 'hero1',
    mainPlaces: [
      {
        city: 'Radom',
        street: 'Kusocińskiego 8',
        conjunction: 'przy',
        place: 'II  L.O. im. M. Konopnickiej',
        link: 'https://www.google.com/maps/place/Janusza+Kusoci%C5%84skiego+8,+26-609+Radom/@51.4097875,21.1556631,18z/data=!3m1!4b1!4m5!3m4!1s0x47185ed47c8c0719:0xafcb22c42f2b4be5!8m2!3d51.4097861!4d21.1565833'
      },
      {
        city: 'Radom',
        street: 'Wernera 22',
        conjunction: 'przy',
        place: 'ZSE w Radomiu',
        link: 'https://www.google.com/maps/place/Wernera+22,+26-610+Radom/@51.411079,21.1352686,17z/data=!3m1!4b1!4m8!1m2!2m1!1sradom+wernera+22!3m4!1s0x4718592f64e3951d:0x554a2e7dd674e6a5!8m2!3d51.411077!4d21.13657'
      },
      {
        city: 'Radom',
        street: 'Mariacka 25',
        conjunction: 'przy',
        place: 'IV L.O. im dra T. Chałubińskiego',
        link: 'https://www.google.com/maps/place/Mariacka+25,+26-612+Radom/@51.3961211,21.1401374,17z/data=!3m1!4b1!4m8!1m2!2m1!1smariacka+25!3m4!1s0x47185ecaa52f2187:0xd26722373bf08e8a!8m2!3d51.3961178!4d21.1423261'
      }
    ]
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
    }, 7000)
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

  render() {
    const { isLoading, scrollYPosition, menuIsOpen, heroImage, mainPlaces } = this.state
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
            <MainPlaces
              mainPlaces={mainPlaces}
              handleOpenPlaceMap={this.handleOpenPlaceMap}
            />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
