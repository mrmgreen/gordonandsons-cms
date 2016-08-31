import React, { Component } from 'react'
import styles from '../toolbar.local.css'

class Image extends Component {
  render() {
    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>This is an image component</h3>
      </div>
    )
  }
}

export default Image;
