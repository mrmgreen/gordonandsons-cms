import React, { PropTypes } from 'react';

const BoldComponent = ({ bold }) => (
  <p style={{
    fontWeight: bold ? 'bold' : 'none'
  }}>Bold
</p>
)

BoldComponent.propTypes = {
  bold: PropTypes.bool.isRequired,
}

export default BoldComponent
