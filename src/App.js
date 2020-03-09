import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Static40 from './components/Static40'
import Main from './components/Main'


class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Static40></Static40>
      </div>
    )
  }
}

export default App
