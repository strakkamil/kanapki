import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loading from './pages/Loading/Loading'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import './App.css'

class App extends Component {
  state = {
    // isLoading: true,
    scrollYPosition: 0,
    menuIsOpen: false,
    heroImage: ''
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
    const hero = ['hero1', 'hero2']
    let i = 0
    setInterval(() => {
      i++
      if (i > 1) {
        i = 0
      }
      this.setState({
        heroImage: hero[i]
      })
    }, 10000)
  }

  render() {
    const { isLoading, scrollYPosition, menuIsOpen, heroImage } = this.state
    return (
      <Router>
        <div className='app'>
          <Loading
            isLoading={isLoading}
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
            <Hero image={heroImage} />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
