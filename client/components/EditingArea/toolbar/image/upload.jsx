import React, { Component, PropTypes } from 'react'
import styles from '../toolbar.local.scss'
import ImgPreviewHeader from './ImgPreviewHeader'
import cx from "classnames";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  componentWillReceiveProps(newProps) {
    newProps.image.src !== this.props.image.src && newProps.image.src !== '' ?
    this.setState({
      active: true,
    })
    : this.setState({
      active: false,
    })
  }

  render() {
    let img = this.props.image.src ? <img src={this.props.image.src} className={ styles.img }></img> : null;
    let className = cx(
      this.state.active ? [styles.imagepreviewActive] : [styles.imagepreview],
    );
    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>Upload image</h3>
        <input
          type="file"
          name="file"
          id="file"
          onChange={this.props.handleImageUploadChange}
         />
         <div className={ className }>
           <ImgPreviewHeader handleCancelClick={ this.props.handleCancelClick } />
           <div className={ styles.imageContainer }>
             {img}
             Image size:
             {this.props.image.size}
           </div>
         </div>
      </div>
    )
  }
}

Image.propTypes = {
  handleImageUploadChange: PropTypes.func,
  image: PropTypes.object,
  handleCancelClick: PropTypes.func,
}

export default Image;
