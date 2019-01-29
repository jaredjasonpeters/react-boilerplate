import React, { SFC } from 'react'
import { hot } from 'react-hot-loader'

const App: React.SFC = props => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default hot(module)(App)
