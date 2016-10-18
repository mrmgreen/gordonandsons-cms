import React, { Component, PropTypes } from 'react';
import styles from '../toolbar.local.css';
import BoldComponent from './boldComponent';
import ItalicsComponent from './italicsComponent';
import UnderlineComponent from './underlineComponent';
import BackgroundColorComponent from './backgroundColorComponent';

class Text extends Component {
  render() {
    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>This is a text component</h3>
        <BoldComponent bold={ this.props.text.bold } handleBoldClick={this.props.handleBoldClick} />
        <ItalicsComponent italics={ this.props.text.italics } handleItalicsClick={this.props.handleItalicsClick} />
        <UnderlineComponent underline={ this.props.text.underline } handleUnderlineClick={this.props.handleUnderlineClick} />
        <BackgroundColorComponent handleBackgroundColorClick={this.props.handleBackgroundColorClick} />
      </div>
    )
  }
}

Text.propTypes = {
  text: React.PropTypes.object,
  handleBoldClick: React.PropTypes.func,
  handleItalicsClick: React.PropTypes.func,
  handleUnderlineClick: React.PropTypes.func,
  handleBackgroundColorClick: React.PropTypes.func,
}

export default Text;
