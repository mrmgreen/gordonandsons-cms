import React, { Component, PropTypes } from 'react'
import WebPageContainer from '../../containers/WebPageContainer'
import ToolBarContainer from '../../containers/ToolbarContainer'
import styles from './EditingArea.local.css'

class EditingArea extends Component {
  render() {
    return(
      <div className={ styles['EditingArea'] }>
        <ToolBarContainer />
        <WebPageContainer />
      </div>
    )
  }
}

export default EditingArea;
