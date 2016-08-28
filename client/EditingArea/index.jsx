import React, { Component, PropTypes } from 'react'
import WebPage from './webpage/WebPage'
import ToolBar from './toolbar/Toolbar'
import styles from './EditingArea.local.css'

class EditingArea extends Component {
  render() {
    return(
      <div className={ styles['EditingArea'] }>
        <ToolBar />
        <WebPage />
      </div>
    )
  }
}

export default EditingArea;
