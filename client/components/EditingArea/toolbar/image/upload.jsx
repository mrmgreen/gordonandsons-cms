import React, { Component, PropTypes } from 'react'
import styles from '../toolbar.local.css'

class Image extends Component {

  render() {
    let img = this.props.image.src ? <img src={this.props.image.src}></img> : null;
    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>Upload image</h3>
        <div className={styles['imagepreview']}>
          {img}
        </div>
        <input
          multiple
          type="file"
          name="file"
          id="file"
          onChange={this.props.handleImageUploadChange}
         />
      </div>
    )
  }
}

Image.propTypes = {
  handleImageUploadChange: PropTypes.func,
  image: PropTypes.object,
}

export default Image;
