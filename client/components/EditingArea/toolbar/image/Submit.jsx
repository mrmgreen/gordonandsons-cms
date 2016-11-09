import React, { PropTypes } from 'react';
import styles from '../toolbar.local.scss';

function Submit(props) {
  return (
    <button
      className={ styles.cancel }
      onClick={props.handleSubmitClick}
      >
      Submit
    </button>
  )
}

Submit.propTypes = {
  handleSubmitClick: React.PropTypes.func,
}

export default Submit;
