import React, { PropTypes } from 'react';
import styles from '../toolbar.local.scss';

function Cancel(props) {
  return (
    <button
      className={ styles.cancel }
      onClick={props.handleCancelClick}
      >
      Cancel
    </button>
  )
}

Cancel.propTypes = {
  handleCancelClick: React.PropTypes.func,
}

export default Cancel;
