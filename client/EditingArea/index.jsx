import React, { Component, PropTypes } from 'react'
import WebPage from './webpage/WebPage'
import ToolBar from './toolbar/Toolbar'

class EditingArea extends Component {
  render() {
    return(
      <div>
        <ToolBar />
        <WebPage />
      </div>
    )
  }
}

export default EditingArea;
