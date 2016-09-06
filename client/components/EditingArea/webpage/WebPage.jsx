import React, { Component, PropTypes } from 'react';
import styles from './Webpage.local.css';

class WebPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={styles['webpage']} contentEditable="true" onKeyDown={this.props.onKeyDown}></div>
    )
  }
}

WebPage.propTypes = {
  onKeyDown: React.PropTypes.func,
}

export default WebPage;
