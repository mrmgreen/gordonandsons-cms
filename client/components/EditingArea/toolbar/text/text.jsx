import React, { Component, PropTypes } from 'react';
import styles from '../toolbar.local.css';
import BoldComponent from './boldComponent';
import ItalicsComponent from './italicsComponent';
import UnderlineComponent from './underlineComponent';

class Text extends Component {
  render() {
    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>This is a text component</h3>
        <BoldComponent bold={ this.props.text.bold } handleBoldClick={this.props.handleBoldClick} />
        <ItalicsComponent italics={ this.props.text.italics } handleItalicsClick={this.props.handleItalicsClick} />
        <UnderlineComponent underline={ this.props.text.underline } handleUnderlineClick={this.props.handleUnderlineClick} />
        <button onClick={ this.props.handleClick }>CLICK ME NOW!!!</button>
      </div>
    )
  }
}

Text.propTypes = {
  handleClick: React.PropTypes.func,
  text: React.PropTypes.object,
  handleBoldClick: React.PropTypes.func,
  handleItalicsClick: React.PropTypes.func,
  handleUnderlineClick: React.PropTypes.func,
}

export default Text;
