import React, { Component, PropTypes } from 'react';
import WebPage from '../components/EditingArea/webpage/WebPage'
import styles from './WebpageContainer.local.css';

class WebPageContainer extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    
    console.log('key down', e)
  }

  render() {
    return(
      <div className={styles['WebPageContainer']}>
        <WebPage onKeyDown={this.onKeyDown}/>
      </div>
    )
  }
}

WebPageContainer.propTypes = {
  handleClick: React.PropTypes.func,
}

export default WebPageContainer;
