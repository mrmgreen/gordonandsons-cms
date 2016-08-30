import React, { Component, PropTypes } from 'react'

class Text extends Component {
  render() {
    return (
      <div>
        <h3>This is a text component</h3>
        <button onClick={this.props.handleClick}></button>
      </div>
    )
  }
}

Text.propTypes = {
  handleClick: React.PropTypes.func,
}

export default Text;
