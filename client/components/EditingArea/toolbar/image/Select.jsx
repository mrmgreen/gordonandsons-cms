import React, { Component, PropTypes } from 'react';
import styles from '../toolbar.local.scss';
import ImgPreviewHeader from './ImgPreviewHeader';
import ImagePreviewFooter from './ImagePreviewFooter';
import cx from "classnames";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Select extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      active: false,
      imageKey: 1,
    }
  }

  handleOnClick(e) {
    this.setState({
      active: true
    });
    this.props.handleOnClick();
  }

  render() {
    let img = this.props.image.src ? <img src={this.props.image.src} className={ styles.img }></img> : null;
    let className = cx(
      this.state.active ? [styles.imagepreviewActive] : [styles.imagepreview],
    );
    let imageSelectionComp;
    if (this.state.active) {
      imageSelectionComp = <div className={ className } key="upload">
          <ImgPreviewHeader handleCancelClick={ this.props.handleCancelClick } />
          <div className={ styles.imageContainer }>
            {img}
            Image size:
          </div>
          <ImagePreviewFooter handleImageSelection={ this.props.handleImageSelection } />
        </div>
    } else { imageSelectionComp = null }

    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>Select an image</h3>
        <button onClick={this.handleOnClick}>Select image</button>
         <ReactCSSTransitionGroup
           transitionName = "imageSelection"
           transitionEnterTimeout={500} transitionLeaveTimeout={300}
           transitionEnter = {true} transitionLeave = {true}
          >
          { imageSelectionComp }
         </ReactCSSTransitionGroup>
      </div>
    )
  }
}

Select.propTypes = {
  image: PropTypes.object,
  handleCancelClick: PropTypes.func,
  handleImageSelection: PropTypes.func,
  handleOnClick: PropTypes.func,
}

export default Select;
