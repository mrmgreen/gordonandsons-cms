import React, { PropTypes } from 'react';

const UnderlineComponent = (props) => {
  return (
    <button
      className={(props.underline === true) ? 'underline' : 'none'}
      onClick={props.handleUnderlineClick}
      >Underline is :  { props.underline === true ? 'true' : 'false' }
    </button>
  )
}

UnderlineComponent.propTypes = {
  underline: PropTypes.bool.isRequired,
  handleUnderlineClick: PropTypes.func.isRequired,
}

export default UnderlineComponent
