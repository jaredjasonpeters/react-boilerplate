import React, { SFC } from 'react'
import { hot } from 'react-hot-loader'
import { Header } from './Components/Header'

const exTheme = {
  color: 'red'
}

const App: React.SFC = props => {
  return (
    <div>
      Hello World
    </div>
  )
}

export default hot(module)(App)
