import React, { Component, PropTypes } from 'react';
import WebPage from '../components/EditingArea/webpage/WebPage'
import styles from './WebpageContainer.local.css';

class WebPageContainer extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    const bKey = 66
    console.log('clicked: ',e.which)
    if (e.keyCode === 13) {
      document.execCommand('formatBlock', false, 'p')
    } else if((e.ctrlKey || e.metaKey) && e.keyCode === bKey) {
      console.log('ooops')
      document.execCommand('bold', false, null);
    }
  }

  onClick(e) {
    console.log('clicked me');
  }

  render() {
    return(
      <div className={styles['WebPageContainer']}>
        <WebPage onKeyDown={this.onKeyDown} onClick={this.onClick}/>
      </div>
    )
  }
}

export default WebPageContainer;
