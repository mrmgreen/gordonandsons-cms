import React, { Component, PropTypes } from 'react';
import WebPage from '../components/EditingArea/webpage/WebPage'
import styles from './WebpageContainer.local.css';

class WebPageContainer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className={styles['WebPageContainer']}>
        <WebPage />
      </div>
    )
  }
}

WebPageContainer.propTypes = {
  handleClick: React.PropTypes.func,
}

export default WebPageContainer;
