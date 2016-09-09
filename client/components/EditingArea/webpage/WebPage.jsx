import React, { Component, PropTypes } from 'react';
import styles from './Webpage.local.css';

class WebPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={styles['webpage']} contentEditable="true" onKeyDown={this.props.onKeyDown} onClick={this.props.onClick}></div>
    )
  }
}

WebPage.propTypes = {
  onKeyDown: React.PropTypes.func,
  onClick: React.PropTypes.func,
}

export default WebPage;
