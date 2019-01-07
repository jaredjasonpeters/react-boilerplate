import * as React from 'react'
import * as propTypes from 'prop-types'

type ErrorBoundaryState = {
  isError: boolean
}

export default class DefaultErrorBoundary extends React.Component<
  {},
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props)
    this.state = {
      isError: false
    }
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  static propTypes = {
    children: propTypes.node.isRequired
  }

  render() {
    const { isError } = this.state
    const { children } = this.props
    return isError ? <div>Something went wrong!</div> : children
  }
}
