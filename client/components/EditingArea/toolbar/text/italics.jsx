import React, { PropTypes } from 'react';

const ItalicsComponent = (props) => {
  return (
    <p className={(props.italics === true) ? 'italics' : 'none'
    }>Italics is :  { props.italics === true ? 'true' : 'false' }
    </p>
  )
}

ItalicsComponent.propTypes = {
  italics: PropTypes.bool.isRequired,
}

export default ItalicsComponent
