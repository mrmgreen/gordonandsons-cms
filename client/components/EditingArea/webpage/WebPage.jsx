import React, { Component, PropTypes } from 'react';
import styles from './Webpage.local.css';

class WebPage extends Component {
  render() {
    return(
      <div className={styles['webpage']}>
        <h1>Webpage</h1>
      </div>
    )
  }
}

export default WebPage;
