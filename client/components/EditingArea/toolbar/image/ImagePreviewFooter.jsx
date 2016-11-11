import React, { PropTypes } from 'react';
import styles from '../toolbar.local.scss';
import Submit from './Submit';

function ImgPreviewFooter(props) {
  return (
    <div className={styles.imgPreviewFooter}>
      ImgPreviewFooter
      <Submit handleSubmitClick={props.handleSubmitClick} />
    </div>
  )
}

ImgPreviewFooter.propTypes = {
  handleSubmitClick: React.PropTypes.func,
}

export default ImgPreviewFooter;
