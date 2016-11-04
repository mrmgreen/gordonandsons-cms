import React, { PropTypes } from 'react';
import styles from '../toolbar.local.scss';
import Cancel from './Cancel';

function ImgPreviewHeader(props) {
  return (
    <div className={styles.imgPreviewHeader}>
      ImgPreviewHeader
      <Cancel handleCancelClick={props.handleCancelClick} />
    </div>
  )
}

ImgPreviewHeader.propTypes = {
  handleCancelClick: React.PropTypes.func,
}

export default ImgPreviewHeader;
