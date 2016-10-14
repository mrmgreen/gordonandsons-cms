import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WebPage from '../components/EditingArea/webpage/WebPage'
import styles from './WebpageContainer.local.css';
import { textBold, textItalics, textHighlighted } from '../actions';
import { debounce } from 'lodash';

class WebPageContainer extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillMount() {
    this._getSelectionToString = debounce(this.getSelectionToString.bind(this), 100);
  }

  onKeyDown(e) {
    const enterKey = 13;
    const bKey = 66;
    const iKey = 73;
    const arrowLeftKey = 37;
    const arrowUpKey = 38;
    const arrowRightKey = 39;
    const arrowDownKey = 40;

    console.log('e.which', e.which);
    if (e.which === enterKey) {
    document.execCommand('formatBlock', false, 'p')
    }
    if (e.metaKey && e.which === bKey) {
      this.props.dispatch(textBold());
    }
    if (e.metaKey && e.which === iKey) {
      this.props.dispatch(textItalics());
    }

    if (e.shiftKey && e.which === arrowLeftKey
      || e.shiftKey && e.which === arrowUpKey
      || e.shiftKey && e.which === arrowRightKey
      || e.shiftKey && e.which === arrowDownKey) {
        this._getSelectionToString();
    }
  }

  getSelectionToString() {
    let highlightedText = document.getSelection().toString();
    this.props.dispatch(textHighlighted(highlightedText));
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
