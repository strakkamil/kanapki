import React, { Component } from 'react';
import Loading from './pages/Loading/Loading'
import Nav from './components/Nav/Nav'
import './App.css'

class App extends Component {
  state = {
    isLoading: true,
    scrollYPosition: 0,
    menuIsOpen: false,
  }

  componentDidMount() {
    this.changeIsLoadingToFalse()
    window.addEventListener('scroll', this.checkScrollY)
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

  render() {
    const { isLoading, scrollYPosition, menuIsOpen } = this.state
    return (
      <div className='app'>
        <Loading
          isLoading={isLoading}
        />
        <Nav
          scrollYPosition={scrollYPosition}
          menuIsOpen={menuIsOpen}
          handleBurgerOnClick={this.handleBurgerOnClick}
        />
      </div>

    )
  }
}

export default App;
