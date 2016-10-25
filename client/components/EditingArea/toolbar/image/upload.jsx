import React, { Component } from 'react'
import styles from '../toolbar.local.css'
import { round } from 'lodash'

class Image extends Component {
  constructor(props) {
    super(props);
    this._handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('e.target.files || e.target.value ===', e.target.files || e.target.value);
    const fileList = e.target.files || e.target.value;
    this.printFileSize(fileList);
  }

  printFileSize(fileList) {
    for (let i = 0; i < fileList.length; i++) {
      console.log('fileList item ===', fileList[i]);
      const bytes = fileList[i].size;
      const KB = round(bytes / 1024, 2);
      const MB = round(KB / 1024, 2);
      if (MB > 2.3) {
        console.log('The image is too big, please try reducing its size');
      } else {
        console.log('uploading');
      }
    }
  }

  render() {
    return (
      <div className={ styles['toolbarComponent'] }>
        <h3>Upload image</h3>
        <input
          multiple
          type="file"
          name="file"
          id="file"
          onChange={this._handleChange}
         />
      </div>
    )
  }
}

export default Image;
