import React, { Component, PropTypes } from 'react';
import styles from './Webpage.local.css';
import WebPage from '../components/EditingArea/webpage/WebPage'

class WebPageContainer extends Component {
  constructor(props) {

  }
  render() {
    return(
      <div>
        <WebPage />
      </div>
    )
  }
}

WebPageContainer.propTypes = {
  handleClick: React.PropTypes.func,
}

export default WebPageContainer;
