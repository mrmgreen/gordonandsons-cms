import React, { Component, PropTypes } from 'react'
import WebPage from '../../containers/WebPage'
import ToolBar from '../../containers/ToolbarContainer'
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
