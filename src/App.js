import React, { Component } from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        
      <Greet name=""/>
      <Welcome name=""/>
      </React.Fragment>
    )
  }
}
