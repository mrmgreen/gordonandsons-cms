import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { textBold, textItalics, textUnderline, imageUpload, imageCancel, startImageUpload } from '../actions'
import styles from './toolbar.local.css'
import Text from '../components/EditingArea/toolbar/text/text'
import ImageUpload from '../components/EditingArea/toolbar/image/upload'
import { round } from 'lodash'

class ToolbarContainer extends Component {

  constructor(props) {
    super(props);
    this.handleBoldClick = this.handleBoldClick.bind(this);
    this.handleItalicsClick = this.handleItalicsClick.bind(this);
    this.handleUnderlineClick = this.handleUnderlineClick.bind(this);
    this.handleBackgroundColorClick = this.handleBackgroundColorClick.bind(this);
    this.handleImageUploadChange = this.handleImageUploadChange.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleImageUploadChange(e) {
    console.log('e.target.files || e.target.value ===', e.target.files || e.target.value);
    const fileList = e.target.files || e.target.value;
    this.fileUpload(fileList);
  }

  fileUpload(fileList) {
    console.log('fileUpload');
    const size = this.printFileSize(fileList);
    console.log('size of file ===', size);
    const file = fileList[0];
    const reader = new FileReader();
    console.log('reader ===', reader);
    reader.onload = ((e) => {
      this.props.dispatch(imageUpload({
        src: reader.result,
        size,
        file,
      }))
    });
    reader.readAsDataURL(file)

  }

  printFileSize(fileList) {
    for (let i = 0; i < fileList.length; i++) {
      const bytes = fileList[i].size;
      const KB = round(bytes / 1024, 2);
      const MB = round(KB / 1024, 2);
      return MB >= 1 ? `${MB} MB` : `${KB} KB`;
    }
  }

  handleBackgroundColorClick(e) {
    document.execCommand('BackColor', false, '#D4FF00');
  }

  handleBoldClick(e) {
    this.props.dispatch(textBold());
    document.execCommand('bold', false, null);
  }

  handleItalicsClick(e) {
    this.props.dispatch(textItalics());
    document.execCommand('italic', false, null);
  }

  handleUnderlineClick(e) {
    this.props.dispatch(textUnderline());
    document.execCommand('underline', false, null);
  }

  handleCancelClick(e) {
    this.props.dispatch(imageCancel());
  }

  handleSubmitClick(e) {
    console.log('handleSubmitClick');
    this.props.dispatch(startImageUpload(this.props.image.file));
    this.props.dispatch(imageCancel());
  }


  render() {
    const increments = this.props.counter;
    return (
      <div className={styles['toolbarContainer']}>
        <h2>This is a toolbar</h2>
        <Text
          handleBoldClick={this.handleBoldClick}
          handleItalicsClick={this.handleItalicsClick}
          handleUnderlineClick={this.handleUnderlineClick}
          handleBackgroundColorClick={this.handleBackgroundColorClick}
          text={this.props.text}
          />
        <ImageUpload
          handleImageUploadChange={this.handleImageUploadChange}
          image={this.props.image}
          handleCancelClick={this.handleCancelClick}
          handleSubmitClick={this.handleSubmitClick}
          />
      </div>
    )
  }
}

ToolbarContainer.propTypes = {
  dispatch: React.PropTypes.func,
  text: React.PropTypes.object,
  image: React.PropTypes.object,
}

function mapStateToProps(state) {
  return {
    text: state.text,
    image: state.image,
  }
}

export default connect(mapStateToProps)(ToolbarContainer);
