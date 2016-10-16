import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { counter, textBold, textItalics, textUnderline } from '../actions'
import styles from './toolbar.local.css'
import Text from '../components/EditingArea/toolbar/text/text'
import Image from '../components/EditingArea/toolbar/image/image'

class ToolbarContainer extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleBoldClick = this.handleBoldClick.bind(this);
    this.handleItalicsClick = this.handleItalicsClick.bind(this);
    this.handleUnderlineClick = this.handleUnderlineClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault;
    this.props.dispatch(counter());
  }

  handleBoldClick(e) {
    this.props.dispatch(textBold());
    document.execCommand('bold', false, null);
  }

  handleItalicsClick(e) {
    this.props.dispatch(textItalics());
    document.execCommand('italic', false, null);
  }

  handleUnderlineClick(e) {
    this.props.dispatch(textUnderline());
    document.execCommand('underline', false, null);
  }

  render() {
    const increments = this.props.counter;
    return (
      <div className={styles['toolbarContainer']}>
        <h2>This is a toolbar with { increments } increments</h2>
        <Text
          handleClick={this.handleClick}
          handleBoldClick={this.handleBoldClick}
          handleItalicsClick={this.handleItalicsClick}
          handleUnderlineClick={this.handleUnderlineClick}
          text={this.props.text}
          />
        <Image />
      </div>
    )
  }
}

ToolbarContainer.propTypes = {
  counter: React.PropTypes.number,
  dispatch: React.PropTypes.func,
  text: React.PropTypes.object,
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    text: state.text,
  }
}

export default connect(mapStateToProps)(ToolbarContainer);
