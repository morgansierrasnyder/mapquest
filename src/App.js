import React, { Component } from 'react'
import glamorous from 'glamorous'

import './App.css'
import logo from './assets/logo.svg'
import edCorpsData from './data/edcorps'
import buildMarkers from './utils/buildMarkers'
import { Map } from './components'

const Container = glamorous.div({
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif'
})

const Header = glamorous.div({
  backgroundColor: '#aaa',
  height: '150px',
  padding: '20px',
  color: '#fff'
})

const Logo = glamorous.img({
  height: '60px'
})

class App extends Component {
  markers = buildMarkers(edCorpsData)

  render() {
    return (
      <Container>
        <Header>
          <Logo src={logo} alt="edcorps logo" />
          <h2>Real World Scholars<br/>EdCorps Map</h2>
        </Header>
        <p>
          We're on a quest to make a map of all Real World Scholars EdCorps classrooms!
        </p>
        <Map markers={this.markers}></Map>
      </Container>
    )
  }
}

export default App
