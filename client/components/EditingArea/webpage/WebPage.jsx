import React, { Component, PropTypes } from 'react';
import styles from './Webpage.local.css';

class WebPage extends Component {
  constructor(props) {

  }
  render() {
    return(
      <div className={styles['webpage']} contentEditable="true"></div>
    )
  }
}

WebPage.propTypes = {
  handleClick: React.PropTypes.func,
}

export default WebPage;
