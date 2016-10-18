import React, { PropTypes } from 'react';

const backgroundColor = (props) => (
  <button
    onClick={props.handleBackgroundColorClick}
    >
    Backcolor
  </button>
)

backgroundColor.propTypes = {
  handleBackgroundColorClick: PropTypes.func.isRequired,
}

export default backgroundColor
