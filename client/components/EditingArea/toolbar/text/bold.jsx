import React, { PropTypes } from 'react';

const BoldComponent = (props) => (
  <button className={(props.bold === true) ? 'bold' : 'none'
  } onClick={props.handleBoldClick} >Bold is :  { props.bold === true ? 'true' : 'false' }
</button>
)

BoldComponent.propTypes = {
  bold: PropTypes.bool.isRequired,
  handleBoldClick: PropTypes.func.isRequired,
}

export default BoldComponent
