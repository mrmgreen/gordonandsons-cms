import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { textBold, textItalics, textUnderline, imageUpload } from '../actions'
import styles from './toolbar.local.css'
import Text from '../components/EditingArea/toolbar/text/text'
import ImageUpload from '../components/EditingArea/toolbar/image/upload'

class ToolbarContainer extends Component {

  constructor(props) {
    super(props);
    this.handleBoldClick = this.handleBoldClick.bind(this);
    this.handleItalicsClick = this.handleItalicsClick.bind(this);
    this.handleUnderlineClick = this.handleUnderlineClick.bind(this);
    this.handleBackgroundColorClick = this.handleBackgroundColorClick.bind(this);
  }

  handleBackgroundColorClick(e) {
    document.execCommand('BackColor', false, '#D4FF00');
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
        <h2>This is a toolbar</h2>
        <Text
          handleBoldClick={this.handleBoldClick}
          handleItalicsClick={this.handleItalicsClick}
          handleUnderlineClick={this.handleUnderlineClick}
          handleBackgroundColorClick={this.handleBackgroundColorClick}
          text={this.props.text}
          />
        <ImageUpload />
      </div>
    )
  }
}

ToolbarContainer.propTypes = {
  dispatch: React.PropTypes.func,
  text: React.PropTypes.object,
}

function mapStateToProps(state) {
  return {
    text: state.text,
  }
}

export default connect(mapStateToProps)(ToolbarContainer);
