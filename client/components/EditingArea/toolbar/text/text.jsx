import React, { Component, PropTypes } from 'react';
import styles from '../toolbar.local.css';
import BoldComponent from './bold';

class Text extends Component {
  render() {
    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>This is a text componentz</h3>
        <BoldComponent bold={ (this.props.text.bold) ? this.props.text.bold : false }/>
        <button onClick={ this.props.handleClick }>CLICK ME NOW!!!</button>
      </div>
    )
  }
}

Text.propTypes = {
  handleClick: React.PropTypes.func,
  text: React.PropTypes.object,
}

export default Text;
