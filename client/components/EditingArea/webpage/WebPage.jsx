import React, { Component, PropTypes } from 'react';
import styles from './Webpage.local.css';
import { partialRight } from 'lodash';

class WebPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div
        ref={(c) => this.node = c}
        className={styles['webpage']}
        contentEditable="true"
        onKeyDown={this.props.onKeyDown}
        onClick={this.props.onClick}
      ></div>
    )
  }
}

WebPage.propTypes = {
  onKeyDown: React.PropTypes.func,
  onClick: React.PropTypes.func,
}

export default WebPage;
