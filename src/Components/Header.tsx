import React from 'react'

type initProps = {
  theme: {
    color: string
  }
}

type initState = {}

const initialState: initState = {}

export class Header extends React.Component<initProps, initState> {
  constructor(props: initProps) {
    super(props)
    this.state = initialState
  }

  render() {
    return <div>{this.props.theme.color}</div>
  }
}
