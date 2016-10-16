import React, { PropTypes } from 'react';

const ItalicsComponent = (props) => {
  return (
    <button
      className={(props.italics === true) ? 'italics' : 'none'}
      onClick={props.handleItalicsClick}
      >Italics is :  { props.italics === true ? 'true' : 'false' }
    </button>
  )
}

ItalicsComponent.propTypes = {
  italics: PropTypes.bool.isRequired,
  handleItalicsClick: PropTypes.func.isRequired,
}

export default ItalicsComponent
