import * as React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My First Component</h1>
      </div>
    )
  }
}

export default hot(module)(App)