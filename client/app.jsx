import React, { Component, PropTypes } from 'react'
import EditingArea from './EditingArea'

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <EditingArea />
      </div>
    )
  }
}

App.PropTypes = {
  value: PropTypes.string.isRequired,
}

export default App
