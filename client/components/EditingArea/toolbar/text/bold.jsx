import React, { PropTypes } from 'react';

const BoldComponent = (props) => (
  <p className={(props.bold === true) ? 'bold' : 'none'
  }>Bold is :  { props.bold === true ? 'true' : 'false' }
</p>
)

BoldComponent.propTypes = {
  bold: PropTypes.bool.isRequired,
}

export default BoldComponent
