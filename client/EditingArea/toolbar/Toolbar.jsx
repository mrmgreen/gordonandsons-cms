import React, { Component, PropTypes } from 'react'
import styles from './toolbar.local.css'
import Text from './Text'

class Toolbar extends Component {
  render() {
    return (
      <div className={styles['toolbar']}>
        <h2>This is a toolbar</h2>
        <Text />
      </div>
    )
  }
}

export default Toolbar;
