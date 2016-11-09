import React, { Component, PropTypes } from 'react';
import styles from '../toolbar.local.scss';
import ImgPreviewHeader from './ImgPreviewHeader';
import ImagePreviewFooter from './ImagePreviewFooter';
import cx from "classnames";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      imageKey: 1,
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
    if (newProps.image.value !== this.props.image.value) {
      this.setState({
        imageKey: this.state.imageKey +=1,
      });
    }
  }

  render() {
    let img = this.props.image.src ? <img src={this.props.image.src} className={ styles.img }></img> : null;
    let className = cx(
      this.state.active ? [styles.imagepreviewActive] : [styles.imagepreview],
    );
    let imageUploadComp;
    if (this.state.active) {
      imageUploadComp = <div className={ className } key="upload">
          <ImgPreviewHeader handleCancelClick={ this.props.handleCancelClick } />
          <div className={ styles.imageContainer }>
            {img}
            Image size:
            {this.props.image.size}
          </div>
          <ImagePreviewFooter handleSubmitClick={ this.props.handleSubmitClick } />
        </div>
    } else { imageUploadComp = null }

    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>Upload image</h3>
        <input
          key={this.state.imageKey}
          type="file"
          name="file"
          id="file"
          onChange={this.props.handleImageUploadChange}
         />
         <ReactCSSTransitionGroup
           transitionName = "imagepreview"
           transitionEnterTimeout={500} transitionLeaveTimeout={300}
           transitionEnter = {true} transitionLeave = {true}
          >
          { imageUploadComp }
         </ReactCSSTransitionGroup>
      </div>
    )
  }
}

Image.propTypes = {
  handleImageUploadChange: PropTypes.func,
  image: PropTypes.object,
  handleCancelClick: PropTypes.func,
  handleSubmitClick: PropTypes.func,
}

export default Image;
