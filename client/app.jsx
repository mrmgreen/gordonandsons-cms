import React, { Component, PropTypes } from 'react'
import ToolBar from './toolbar/Toolbar'
import WebPage from './webpage/Webpage';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <ToolBar />
        <WebPage />
      </div>
    )
  }
}

App.PropTypes = {
  value: PropTypes.string.isRequired,
}

export default App
