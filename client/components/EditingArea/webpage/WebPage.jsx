import React, { Component, PropTypes } from 'react';
import styles from './Webpage.local.css';
import { partialRight } from 'lodash';

class WebPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.node.addEventListener('mouseup', () => {
      if (!(document.getSelection().toString() === '')) {
      console.log('tostring', document.getSelection().toString());
      }
    });
  }

  render() {
    return(
      <div
        ref={(node) => this.node = node}
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
