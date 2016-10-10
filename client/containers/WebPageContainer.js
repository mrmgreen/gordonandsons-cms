import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WebPage from '../components/EditingArea/webpage/WebPage'
import styles from './WebpageContainer.local.css';

class WebPageContainer extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(e) {
    const enterKey = 13;
    const bKey = 66;
    const iKey = 73;

    console.log('e.which', e.which);
    if (e.which === enterKey) {
    document.execCommand('formatBlock', false, 'p')
    }
    if (e.metaKey && e.which === bKey) {
      console.log('Bold me');
    }
    if (e.metaKey && e.which === iKey) {
      console.log('italics');
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

WebPageContainer.propTypes = {
  text: React.PropTypes.object,
  dispatch: React.PropTypes.func,
}

function mapStateToProps(state) {
  return {
    text: state.text,
  }
}

export default connect(mapStateToProps)(WebPageContainer);
