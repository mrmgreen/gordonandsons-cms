import React, { Component, PropTypes } from 'react'
import styles from '../toolbar.local.css'

class Text extends Component {
  render() {
    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>This is a text componentz</h3>
        <button onClick={this.props.handleClick}>CLICK ME NOW!!!</button>
      </div>
    )
  }
}

Text.propTypes = {
  handleClick: React.PropTypes.func,
}

export default Text;
